import React, { Component, Fragment } from 'react';
import ItemLista from '../../components/ItemLista';
import Header from '../../components/Header';
import Localizacao from '../../components/Localizacao';


export default class ListaPage extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Localizacao />
        <div className="container">
          <div className="row">
            <div className="col">
              <ItemLista foto="/assets/ic_shipping.png" valor="1900" descricao="DESCRICAO" estado="Santa Catarina" codigo="MLA855548759"></ItemLista>
              <ItemLista foto="/assets/ic_shipping.png" valor="1900" descricao="DESCRICAO" estado="Santa Catarina"></ItemLista>
              <ItemLista foto="/assets/ic_shipping.png" valor="1900" descricao="DESCRICAO" estado="Santa Catarina"></ItemLista>
              <ItemLista foto="/assets/ic_shipping.png" valor="1900" descricao="DESCRICAO" estado="Santa Catarina"></ItemLista>
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}
