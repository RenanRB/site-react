var axios = require("axios");
const url = 'https://api.mercadolibre.com/'

module.exports = app => {
  
  const controller = {};
  controller.pesquisarProdutos = (req, res) => {
    const {q} = req.query;
    return axios.get(`${url}sites/MLA/search?q=${q}`).then((resposta) => {
      if (resposta.status != 200) {
        return res.status(resposta.status).json({
          erro: 'Erro ao efetuar a requisição',
        });
      }
      
      const {results, filters} = resposta.data;

      if (!results.length) {
        return res.status(200).json({
          erro: 'Nenhum registro encontrado',
        });
      }

      const listaCategorias = filters.find(f => f.id == 'category');
      const categories = listaCategorias ? listaCategorias.values.map(categoria => categoria.name) : '';

      const itens = results.slice(0, 4).map(item => ({
        id: item.id,
        title: item.title,
        price: {
          currency: item.currency_id,
          amount: calcularMoeda(item.price, false),
          decimals: calcularMoeda(item.price, true)
        },
        picture: item.thumbnail,
        condition: item.condition,
        free_shipping: item.shipping.free_shipping,
        state: item.address.state_name,
      }));
      
      res.status(200).json({
        author: {
          name: "Renan Rafael",
          lastname: "Bertoldo"
        },
        categories,
        itens
      });
    });
  };

  controller.buscarProduto = (req, res) => {
    const {id} = req.params;
    const requestItem = axios.get(`${url}items/${id}`);
    const requestDescricao = axios.get(`${url}items/${id}/description`);
    axios.all([requestItem, requestDescricao]).then(axios.spread((...respostas) => {
      if (respostas[0].status != 200 || respostas[1].status != 200) {
        return res.status(resposta.status).json({
          erro: 'Erro ao efetuar a requisição',
        });
      }
      const {data} = respostas[0];

      const item = {
        id: data.id,
        title: data.title,
        price: {
          currency: data.currency_id,
          amount: calcularMoeda(data.price, false),
          decimals: calcularMoeda(data.price, true)
        },
        picture: data.pictures[0].url,
        condition: data.condition,
        free_shipping: data.shipping.free_shipping,
        sold_quantity: data.sold_quantity,
        description: respostas[1].data.plain_text
      }
      
      res.status(200).json({
        author: {
          name: "Renan Rafael",
          lastname: "Bertoldo"
        },
        item
      });
    }));
  };

  function calcularMoeda(valor, isDecimal) {
    const posicao = isDecimal ? 1 : 0;
    return Number(valor.toString().split('.')[posicao]) || 0;
  }
  return controller;
}