import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'
import './itemLista.scss';

class ItemLista extends Component {

  constructor(props) {
    super(props);

    this.abrirDetalhe = this.abrirDetalhe.bind(this);
  }

  abrirDetalhe() {
    this.props.history.push('/items/' + this.props.codigo);
  }

  render() {
    return (

      <div className="row bg-white mx-2" onClick={this.abrirDetalhe}>
        <div className="col">
          <img src={this.props.foto} alt="Imagem do produto" className="img-produto float-left border-10 bg-black" />
          <div className="conteudo float-left">
            <div className="valor">{this.props.valor} <img src="/assets/ic_shipping.png" alt="Frete" /></div>
            <div className="descricao">{this.props.descricao}</div>
          </div>
        </div>
        <div className="col-3 col-sm-2 col-md-2">
          <div className="mt-5 localizacao">{this.props.estado}</div>
        </div>
        <hr className="w-100 mx-4 my-0" />
      </div>
    )
  }
}
export default withRouter(ItemLista);