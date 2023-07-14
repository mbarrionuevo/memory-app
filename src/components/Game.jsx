import { useState } from 'react';

import Board from './Board';
import User from './User';

function Game() {
  const [showGame, setShowGame] = useState(() =>
    localStorage.getItem('player-name')
  );

  const handlePlayAgain = () => {
    localStorage.removeItem('player-name');
    setShowGame(false);
  };

  const handleGameStart = () => {
    setShowGame(true);
  };

  return showGame ? (
    <Board onGamePlayAgain={handlePlayAgain} />
  ) : (
    <User onGameStart={handleGameStart} />
  );
}

export default Game;
