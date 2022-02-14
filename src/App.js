import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { GamesList } from './components/GamesList/GamesList';
import { Filter } from './components/Filter/Filter';
import { Search } from './components/Search/Search';

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Search />
        <Filter />
        <GamesList />
      </div>
    </ChakraProvider>
  );
}

export default App;
