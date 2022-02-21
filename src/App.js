import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { MainPage } from './pages/MainPage/MainPage';
import { HomePage } from './pages/HomePage/HomePage';
import { GamePage } from './pages/GamePage/GamePage';
import { FavoritePage } from './pages/FavoritePage/FavoritePage';

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Switch>
          <Route path="/main" component={MainPage} />
          <Route path="/game" component={GamePage} />
          <Route path="/favorites" component={FavoritePage} />
          <Route path="/" component={HomePage} />
        </Switch>
      </div>
    </ChakraProvider>
  );
}

export default App;
