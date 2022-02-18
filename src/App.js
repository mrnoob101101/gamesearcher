import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { MainPage } from './pages/MainPage/MainPage';
import { HomePage } from './pages/HomePage/HomePage';
import { GamePage } from './pages/GamePage/GamePage';

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        {/*<Header />*/}
        {/*<Switch>
          <Route exact path="/" component={Home}>

          </Route>
          <Route path="/main" component={Main} />
          <Route path="/game" component={Game} />
        </Switch>*/}
        <Switch>
          <Route path="/main">
            <MainPage />
          </Route>
          <Route path="/game">
            <GamePage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </ChakraProvider>
  );
}

export default App;
