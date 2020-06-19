import React, { Component, Fragment } from 'react';
import './detalhe.scss';
import Header from '../../components/Header';
import Localizacao from '../../components/Localizacao';
import api from '../../api';

export default class DetalhePage extends Component {

  state = {
    produto: undefined
  }

  async componentDidMount() {
    let codigo = this.props.match.params.id;
    const response = await api.get('/api/items/' + codigo);
    if (response?.data?.item) {
      this.setState({produto: response.data.item})
    }
  }

  formatarMoeda() {
    return this.state.produto.price.amount.toLocaleString('pt-BR', { style: 'currency', currency: this.state.produto.price.currency, minimumFractionDigits: 0 })
  }

  render() {
    const {produto} = this.state;
    
    if (!produto) {
      return (<Fragment />);
    }
    
    return (
      <Fragment>
        <Header />
        <Localizacao />
        <div className="container detalhe ">
          <div className="row justify-content-center px-4">
            <div className="col bg-white" >
              <img src={produto.picture} alt="foto do produto" className="float-left mt-3" />
              <div className="especificacao float-left">
                <div className="condicao">
                  {produto.condition} - {produto.sold_quantity} vendidos
                </div>
                <div className="titulo">
                {produto.title}
                </div>
                <div className="preco">
                  <div className="float-left">{this.formatarMoeda()}</div>
                  <div className="float-left valor-decimal">{produto.price.decimals}</div>
                </div>
                <div className="comprar">
                  <button className="btn btn-primary w-75">Comprar</button>
                </div>
              </div>
              <div className="descricao w-100 float-left">
                <div className="titulo">Descriçao do produto</div>
                <div className="conteudo">{produto.description}</div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}
