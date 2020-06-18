import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import ListaPage from './pages/ListaPage';
import DetalhePage from './pages/DetalhePage';

export default class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={ListaPage} />
        <Route path="/items/:id" component={DetalhePage} />
        <Route path="/items" component={ListaPage} />
      </Switch>
    );
  }
}