import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ConfettiExplosion from 'react-confetti-explosion';

import { Button, Spinner } from '../common';

import { getStoreItem } from 'utils/localStore';

import { PLAYER_NAME_KEY, DEFAULT_PARAMS, PER_PAGE } from 'constants';

import { ErrorScreen, Card } from 'components';

import useGetAnimals from 'hooks/useGetAnimals';

import useStyles from './styles';

const Board = ({ onChangePlayer }) => {
  const styles = useStyles();

  const [animals, { isLoading, error, refetch }] =
    useGetAnimals(DEFAULT_PARAMS);

  const [flippedCards, setFlippedCards] = useState([]);
  const [touchCard, setTouchCard] = useState(null);
  const [isValidation, setIsValidation] = useState(false);
  const [score, setScore] = useState({ errors: 0, hits: 0 });
  const [isWon, setIsWon] = useState(false);
  const [userName] = useState(getStoreItem(PLAYER_NAME_KEY));

  useEffect(() => {
    if (score.hits === PER_PAGE) {
      setIsWon(true);
    }
  }, [score]);

  const flipCard = (id, index) => {
    if (!touchCard) {
      return setTouchCard((prev) => ({ ...prev, [id]: index }));
    }

    setIsValidation(true);

    const [touched] = Object.entries(touchCard);

    const isMatch = touched?.includes(id) && !touched?.includes(index);

    if (isMatch) {
      setScore((prev) => ({ ...prev, hits: prev.hits++ }));
      setFlippedCards((prev) => [...prev, id]);
      setTouchCard(null);
      setIsValidation(false);
    } else {
      setTouchCard((prev) => ({ ...prev, [id]: index }));
      setTimeout(() => {
        setScore((prev) => ({ ...prev, errors: prev.errors++ }));
        setIsValidation(false);
        setTouchCard(null);
      }, 1000);
    }
  };

  const handleGamePlayAgain = () => {
    setIsWon(false);
    setFlippedCards([]);
    setTouchCard(null);
    setScore({ errors: 0, hits: 0 });
  };

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
            <Button onClick={handleGamePlayAgain}>Play again!</Button>
            <ConfettiExplosion duration={3000} />
            <Button onClick={onChangePlayer}>Change player</Button>
          </div>
        )}
      </section>
      <section className={styles.cardsContainer(isValidation)}>
        {animals?.map((animal, index) => (
          <Card
            imgUrl={animal.imgUrl}
            title={animal.title}
            flip={
              flippedCards.includes(animal.id) ||
              touchCard?.[animal.id] === index
            }
            key={index}
            onClick={() => flipCard(animal.id, index)}
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
