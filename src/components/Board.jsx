import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import Confetti from 'react-confetti';

import Card from './Card';
import ErrorScreen from './ErrorScreen';

import { getStoreItem } from 'utils/localStore';

import { PLAYER_NAME_KEY } from 'constants';

import useGetAnimals from 'hooks/useGetAnimals';

const Board = ({ handlePlayAgain }) => {
  const [animals, { isLoading, problem, refetch }] = useGetAnimals();
  const [flippedCards, setFlippedCards] = useState([]);
  const [touchCard, setTouchCard] = useState(null);
  const [isValidation, setIsValidation] = useState(false);
  const [score, setScore] = useState({ errors: 0, hits: 0 });
  const [isWon, setIsWon] = useState(false);
  const [userName] = useState(getStoreItem(PLAYER_NAME_KEY));

  useEffect(() => {
    if (score.hits === 16) {
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
      setScore((prev) => ({ ...prev, hits: ++prev.hits }));
      setFlippedCards((prev) => [...prev, id]);
      setTouchCard(null);
      setIsValidation(false);
    } else {
      setTouchCard((prev) => ({ ...prev, [id]: index }));
      setTimeout(() => {
        setScore((prev) => ({ ...prev, errors: ++prev.errors }));
        setIsValidation(false);
        setTouchCard(null);
      }, 1000);
    }
  };

  if (problem) {
    return <ErrorScreen refetch={refetch} />;
  }

  if (isLoading) {
    return null;
  }

  return (
    <div className="flex flex-col gap-4 items-center">
      {isWon && (
        <section>
          <button
            className="rounded-md bg-white/10 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-white/20"
            onClick={handlePlayAgain}
          >
            Play again!
          </button>
        </section>
      )}
      <section
        className={`grid h-auto max-h-full grid-cols-4 justify-items-center place-items-center gap-3 md:gap-4 w-full max-w-3xl ${
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
      <section className="flex gap-6 text-xl text-white font-semibold">
        <p>Player: {userName}</p>
        <p>Errors: {score.errors}</p>
        <p>Hits: {score.hits}</p>
      </section>
      <Confetti run={isWon} />
    </div>
  );
};

Board.propTypes = {
  handlePlayAgain: PropTypes.func,
};

export default Board;
