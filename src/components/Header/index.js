import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'
import './header.scss';

class Header extends Component {

  buscar(event) {
    event.preventDefault();
    const inputBusca = event.target.busca;
    this.props.history.push(`/items?search=${inputBusca.value}`);
  }

  render() {
    return (
      <header className="absolut-top">
        <div className="container">
          <div className="row justify-content-center p-2">
            <div className="col-1 mt-1">
              <img src="/assets/Logo_ML.png" alt="logo mercado livre" />
            </div>
            <div className="col-md-11 mt-1">
              <form onSubmit={(event)=>{this.buscar(event)}} >
                <input type="text" className="float-left border border-white rounded-left" name="busca" placeholder="Buscar produtos, marcas e muito mais..." />
                <button type="submit" className="float-left rounded-right position-absolut border-0">
                  <img src="/assets/ic_Search.png" alt="Imagem de uma lupa para realizar a busca" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </header>
    )
  };
}

export default withRouter(Header);
