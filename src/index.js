import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { store } from './store/store';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { GameCard } from './components/GameCard/GameCard';


ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <Provider store={store}>
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/gamecard">
            <GameCard />
          </Route>
        </Switch>

      </Provider>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);
