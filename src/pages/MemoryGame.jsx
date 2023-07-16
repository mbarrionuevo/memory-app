import { useState } from 'react';

import { PLAYER_NAME_KEY } from 'constants';

import { getStoreItem, removeStoreItem } from 'utils/localStore';
import { Board, User } from 'components';

import useStyles from './styles';

function MemoryGame() {
  const [showGame, setShowGame] = useState(getStoreItem(PLAYER_NAME_KEY));

  const handleChangePlayer = () => {
    removeStoreItem(PLAYER_NAME_KEY);
    setShowGame(false);
  };

  const handleGameStart = () => {
    setShowGame(true);
  };

  const styles = useStyles();

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Memory Game</h1>
      </header>
      <main className={styles.mainContainer}>
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
