import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { GamesList } from './components/GamesList/GamesList';
import { Filter } from './components/Filter/Filter';

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Filter />
        <GamesList />
      </div>
    </ChakraProvider>
  );
}

export default App;
