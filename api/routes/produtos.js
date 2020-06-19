module.exports = app => {
  const controller = app.controllers.produtos;

  app.route('/api/items').get(controller.pesquisarProdutos);
  app.route('/api/items/:id').get(controller.buscarProduto);
}