import { useEffect, useState } from 'react';

const useMemoryGame = (totalCards = [], totalMatch = 8) => {
  const [flippedCards, setFlippedCards] = useState([]);
  const [cards, setCards] = useState([]);
  const [score, setScore] = useState({ errors: 0, hits: 0 });
  const [isWon, setIsWon] = useState(false);
  const [isValidation, setIsValidation] = useState(false);

  useEffect(() => {
    if (totalCards.length) {
      initialized();
    }
  }, [totalCards]);

  useEffect(() => {
    if (flippedCards.length === 2) {
      setIsValidation(true);
      const [firstCard, secondCard] = flippedCards;
      if (firstCard.id !== secondCard.id) {
        setScore((prev) => ({ ...prev, errors: prev.errors + 1 }));

        setTimeout(() => {
          setIsValidation(false);
          setCards((prevCards) =>
            prevCards.map((card) =>
              card.index === firstCard.index || card.index === secondCard.index
                ? { ...card, isFlipped: false }
                : card
            )
          );
        }, 1000);
      } else {
        setIsValidation(false);
        setScore((prev) => ({ ...prev, hits: prev.hits + 1 }));
      }

      setFlippedCards([]);
    }
  }, [flippedCards]);

  useEffect(() => {
    if (score.hits === totalMatch) {
      setIsWon(true);
    }
  }, [score, totalMatch]);

  const flipCard = (index) => {
    setCards((prevCards) =>
      prevCards.map((card) =>
        card.index === index ? { ...card, isFlipped: true } : card
      )
    );

    setFlippedCards((prevFlipped) => {
      if (prevFlipped.length < 2) {
        return [...prevFlipped, cards.find((card) => card.index === index)];
      }
      return prevFlipped;
    });
  };

  const initialized = () => {
    const shuffledArray = [...totalCards, ...totalCards]
      .map((card, index) => ({ ...card, index, isFlipped: false }))
      .sort(() => Math.random() * 2 - 0.5);

    setCards(shuffledArray);
  };

  const resetGame = () => {
    setIsWon(false);
    setCards([]);
    setFlippedCards([]);
    setScore({ errors: 0, hits: 0 });
    initialized();
  };

  return { cards, flipCard, isWon, isValidation, score, resetGame };
};

export default useMemoryGame;
