import { useState } from 'react';

import { PLAYER_NAME_KEY } from 'constants';

import { getStoreItem, removeStoreItem } from 'utils/localStore';
import Board from 'components/Board';
import User from 'components/User';

function MemoryGame() {
  const [showGame, setShowGame] = useState(getStoreItem(PLAYER_NAME_KEY));

  const handleChangePlayer = () => {
    removeStoreItem(PLAYER_NAME_KEY);
    setShowGame(false);
  };

  const handleGameStart = () => {
    setShowGame(true);
  };

  return (
    <div className="w-full h-full flex flex-col justify-center bg-slate-500">
      <header className="md:pt-4">
        <h1 className="text-center text-white p-2 font-mono text-xl sm:text-3xl font-bold uppercase">
          Memory Game
        </h1>
      </header>
      <main className="flex h-full w-full flex-grow justify-center items-center overflow-y-auto mb-2 px-4">
        {showGame ? (
          <Board onChangePlayer={handleChangePlayer} />
        ) : (
          <User onGameStart={handleGameStart} />
        )}
      </main>
    </div>
  );
}

export default MemoryGame;
