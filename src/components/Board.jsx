import { useState } from 'react';
import Card from './Card';

import useGetAnimals from 'hooks/useGetAnimals';

const Board = () => {
  const [animals] = useGetAnimals();
  const [flippedCards, setFlippedCards] = useState([]);
  const [touchCard, setTouchCard] = useState(null);
  const [isValidation, setIsValidation] = useState(false);

  const flipCard = (id, index) => {
    if (!touchCard) {
      return setTouchCard((prev) => ({ ...prev, [id]: index }));
    }

    setIsValidation(true);
    const isMatch = Object.keys(touchCard).includes(id);

    if (isMatch) {
      setFlippedCards((prev) => [...prev, id]);
      setTouchCard(null);
      setIsValidation(false);
    } else {
      setTouchCard((prev) => ({ ...prev, [id]: index }));
      setTimeout(() => {
        setIsValidation(false);
        setTouchCard(null);
      }, 1000);
    }
  };

  return (
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
            flippedCards.includes(animal.id) || touchCard?.[animal.id] === index
          }
          key={index}
          onClick={() => flipCard(animal.id, index)}
        />
      ))}
    </section>
  );
};

export default Board;
