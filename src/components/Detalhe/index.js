import React from 'react';
import './detalhe.scss';

function Detalhe() {
  return (
    <div className="container detalhe ">
      <div className="row justify-content-center px-4">
        <div className="col bg-white" >
          <img src="/assets/ic_shipping.png" className="float-left mt-3" />
          <div className="especificacao float-left">
            <div className="condicao">
              Novo - 30 vendidos
            </div>
            <div className="titulo">
              Drone 4k Cámara Full Hd Wifi Csj-x4s - Garantia Gamer24hs
            </div>
            <div className="preco">
              <div className="float-left">$ 1.980</div>
              <div className="float-left valor-decimal">00</div>
            </div>
            <div className="comprar">
              <button className="btn btn-primary w-75">Comprar</button>
            </div>
          </div>
          <div className="descricao w-100 float-left">
            <div className="titulo">Descriçao do produto</div>
            <div className="conteudo">Descriçao do produtoDescriçao do produtoDescriçao do produtoDescriçao do produtoDescriçao do produtoDescriçao do produtoDescriçao do produtoDescriçao do produtoDescriçao do produtoDescriçao do produtoDescriçao do produtoDescriçao do produtoDescriçao do produtoDescriçao do produtoDescriçao do produtoDescriçao do produtoDescriçao do produtoDescriçao do produtoDescriçao do produtoDescriçao do produtoDescriçao do produtoDescriçao do produtoDescriçao do produtoDescriçao do produtoDescriçao do produtoDescriçao do produtoDescriçao do produtoDescriçao do produtoDescriçao do produtoDescriçao do produtoDescriçao do produtoDescriçao do produtoDescriçao do produto</div>
          </div>
        </div>
      </div>
    </div>
  )
};
export default Detalhe;
