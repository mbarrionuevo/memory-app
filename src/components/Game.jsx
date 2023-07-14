import { useState } from 'react';

import Board from './Board';
import User from './User';

import { PLAYER_NAME_KEY } from 'constants';

import { getStoreItem, removeStoreItem } from 'utils/localStore';

function Game() {
  const [showGame, setShowGame] = useState(getStoreItem(PLAYER_NAME_KEY));

  const handlePlayAgain = () => {
    removeStoreItem(PLAYER_NAME_KEY);
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
