import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { GamesList } from './components/GamesList/GamesList';

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <GamesList />
      </div>
    </ChakraProvider>
  );
}

export default App;
