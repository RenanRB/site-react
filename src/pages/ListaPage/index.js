import React, { Component, Fragment } from 'react';
import queryString from 'query-string';
import ItemLista from '../../components/ItemLista';
import Header from '../../components/Header';
import Localizacao from '../../components/Localizacao';
import api from '../../api';


export default class ListaPage extends Component {

  state = {
    produtos: []
  }

  async componentDidMount() {
    const {search} = queryString.parse(this.props.location.search)
    this.buscarRegistros(search);
  }

  async buscarRegistros(search) {
    const response = await api.get('/api/items?q=' + search);
    if (response?.data?.itens) {
      this.setState({produtos: response.data.itens});
    }
  }

  onChildChanged(search) {
    this.buscarRegistros(search);
  }

  render() {

    const {produtos} = this.state;
    return (
      <Fragment>
        <Header callbackParent={(search) => this.onChildChanged(search)} />
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