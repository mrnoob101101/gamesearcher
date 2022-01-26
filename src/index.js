import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { store } from './store/store';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Game } from './components/Game/Game';

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <Provider store={store}>
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/game">
            <Game />
          </Route>
        </Switch>
      </Provider>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);
