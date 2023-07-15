import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ConfettiExplosion from 'react-confetti-explosion';

import Card from './Card';
import ErrorScreen from './ErrorScreen';
import { Button, Spinner } from './common';

import { getStoreItem } from 'utils/localStore';

import { PLAYER_NAME_KEY, DEFAULT_PARAMS, PER_PAGE } from 'constants';

import useGetAnimals from 'hooks/useGetAnimals';

const Board = ({ onChangePlayer }) => {
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
    return <Spinner className="animate-spin mr-3 h-10 w-10 text-white" />;
  }

  return (
    <div className="flex h-full flex-col justify-center wide:landscape:justify-start gap-2">
      <section className="flex flex-col w-full items-center justify-start gap-2">
        {isWon && (
          <div className="flex gap-1 text-white text-sm sm:text-base font-medium text-center">
            <p>Congratulations</p>
            <span className="font-extrabold">{userName}</span>
          </div>
        )}
        <div className="flex gap-4 text-white">
          <p>Hits: {score.hits}</p>
          <p>Errors: {score.errors}</p>
        </div>
        {isWon && (
          <div className="flex gap-4">
            <Button onClick={handleGamePlayAgain}>Play again!</Button>
            <ConfettiExplosion duration={3000} />
            <Button onClick={onChangePlayer}>Change player</Button>
          </div>
        )}
      </section>
      <section
        className={`grid h-auto grid-cols-4 justify-items-center place-content-center wide:landscape:place-content-start place-items-center gap-3 md:gap-4 w-full max-w-3xl min-w-[320px] ${
          isValidation && 'pointer-events-none'
        }`}
      >
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
