import { useState } from 'react';
import PropTypes from 'prop-types';
import ConfettiExplosion from 'react-confetti-explosion';

import { Button, Spinner } from '../common';

import { getStoreItem } from 'utils/localStore';

import { PLAYER_NAME_KEY, DEFAULT_PARAMS } from 'constants';

import { ErrorScreen, Card } from 'components';

import useGetAnimals from 'hooks/useGetAnimals';
import useMemoryGame from 'hooks/useMemoryGame ';

import useStyles from './styles';

const Board = ({ onChangePlayer }) => {
  const styles = useStyles();

  const [animals, { isLoading, error, refetch }] =
    useGetAnimals(DEFAULT_PARAMS);

  const { cards, flipCard, isWon, isValidation, score, resetGame } =
    useMemoryGame(animals);

  const [userName] = useState(getStoreItem(PLAYER_NAME_KEY));

  if (error && !isLoading) {
    return <ErrorScreen refetch={refetch} />;
  }

  if (isLoading) {
    return <Spinner className={styles.spinner} />;
  }

  return (
    <div className={styles.boardContainer}>
      <section className={styles.scoreContainer}>
        {isWon && (
          <div className={styles.congratulations}>
            <p>Congratulations</p>
            <span className="font-extrabold">{userName}</span>
          </div>
        )}
        <div className={styles.score}>
          <p>Hits: {score.hits}</p>
          <p>Errors: {score.errors}</p>
        </div>
        {isWon && (
          <div className={styles.buttonsContainer}>
            <Button onClick={resetGame}>Play again!</Button>
            <ConfettiExplosion duration={3000} />
            <Button onClick={onChangePlayer}>Change player</Button>
          </div>
        )}
      </section>
      <section className={styles.cardsContainer(isValidation)}>
        {cards?.map(({ imgUrl, title, isFlipped, index }) => (
          <Card
            imgUrl={imgUrl}
            title={title}
            flip={isFlipped}
            key={index}
            onClick={() => flipCard(index)}
          />
        ))}
      </section>
    </div>
  );
};

Board.propTypes = {
  onChangePlayer: PropTypes.func,
};

export default Board;
