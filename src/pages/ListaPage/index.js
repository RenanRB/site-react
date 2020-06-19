import React, { Component, Fragment } from 'react';
import ItemLista from '../../components/ItemLista';
import Header from '../../components/Header';
import Localizacao from '../../components/Localizacao';
import api from '../../api';


export default class ListaPage extends Component {

  state = {
    produtos: []
  }

  async componentDidMount() {
    let search = this.props.location.search.split('=')[1];
    const response = await api.get('/api/items?q=' + search);
    if (response?.data?.itens) {
      this.setState({produtos: response.data.itens})
    }
  }

  render() {

    const {produtos} = this.state;
    return (
      <Fragment>
        <Header />
        <Localizacao />
        <div className="container">
          <div className="row">
            <div className="col">
              {produtos.map(produto => (
                <ItemLista produto={produto} key={produto.id}></ItemLista>
              ))}
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}
