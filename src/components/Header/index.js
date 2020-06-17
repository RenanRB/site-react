import React from 'react';
import './header.scss';

function Header() {
  return (
  <header className="absolut-top">
    <div className="container">
      <div className="row justify-content-center p-2">
        <div className="col-1 mt-1">
          <img src="/assets/Logo_ML.png" />
        </div>
        <div className="col-md-11 mt-1">
          <form >
            <input type="text" className="float-left border border-white rounded-left" name="busca" placeholder="Buscar produtos, marcas e muito mais..." />
            <button type="button" className="float-left rounded-right position-absolut border-0">
              <img src="/assets/ic_Search.png" />
            </button>
          </form>
        </div>
      </div>
    </div>
  </header>
  )
};
export default Header;
