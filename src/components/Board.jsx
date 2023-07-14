import { useState } from 'react';
import Card from './Card';

import useGetAnimals from 'hooks/useGetAnimals';

const Board = () => {
  const [animals, { isLoading, problem, refetch }] = useGetAnimals();
  const [flippedCards, setFlippedCards] = useState([]);
  const [touchCard, setTouchCard] = useState(null);
  const [isValidation, setIsValidation] = useState(false);
  const [score, setScore] = useState({ errors: 0, hits: 0 });

  const flipCard = (id, index) => {
    if (!touchCard) {
      return setTouchCard((prev) => ({ ...prev, [id]: index }));
    }

    setIsValidation(true);
    const isMatch = Object.keys(touchCard).includes(id);

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
    return (
      <div className="flex flex-col gap-2">
        <h1 className="text-xl text-white">Oops, something went wrong!</h1>
        <button
          type="button"
          className="rounded-md bg-white/10 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-white/20"
          onClick={refetch}
        >
          Try again!
        </button>
      </div>
    );
  }
  if (isLoading) {
    return null;
  }

  return (
    <div className="flex flex-col gap-4 items-center">
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
        <p>Player: {'KaSh'}</p>
        <p>Errors: {score.errors}</p>
        <p>Hits: {score.hits}</p>
      </section>
    </div>
  );
};

export default Board;
