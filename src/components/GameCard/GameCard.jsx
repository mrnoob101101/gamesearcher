import { Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export const GameCard = () => {

  return (
    <div>
      CARD FROM COMPONENT
      <Link to="/">
        <Button>Back</Button>
      </Link>
    </div>
  );
};
