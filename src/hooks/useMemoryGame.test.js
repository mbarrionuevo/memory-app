import { act, renderHook, waitFor } from '@testing-library/react';

import useMemoryGame from './useMemoryGame ';

const ANIMALS = [
  {
    title: 'Bear',
    id: 'f0753a4f-87b2-484d-aeb1-a22c3278cb50',
  },
  {
    title: 'Bird',
    id: '651e2381-dc33-43fc-8762-58079ffb36d1',
  },
  {
    title: 'Cat',
    id: 'bf9df521-88bb-44f5-8853-d7f9a5f4aa60',
  },
  {
    title: 'Deer',
    id: '1072dca9-1c9b-4a76-abfb-1d70d7dd861b',
  },
  {
    title: 'Dog',
    id: 'c10dc024-71f4-4a60-a3b7-2c53ffe2522d',
  },
  {
    title: 'Dolphin',
    id: 'db3322be-03ac-41af-be11-7944fcef7fa0',
  },
  {
    title: 'Fish',
    id: '6bab500a-c518-4cee-818b-2d3e3e79c036',
  },
  {
    title: 'Fox',
    id: '0ce37857-9fe4-412c-ad4f-2c70737226d6',
  },
];

describe('useMemoryGame', () => {
  test('should check for a non-match and update score', async () => {
    const { result } = renderHook(() => useMemoryGame(ANIMALS));

    act(() => {
      result.current.flipCard(0);
      result.current.flipCard(1);
    });

    const firstCard = result.current.cards.find((card) => card.index === 0);
    const secondCard = result.current.cards.find((card) => card.index === 1);

    // Check if cards are flipped back and score is updated
    expect(result.current.score).toEqual({ errors: 1, hits: 0 });
    waitFor(() => {
      expect(firstCard.isFlipped).toBe(false);
      expect(secondCard.isFlipped).toBe(false);
    });
  });

  test('should check for a match and update score', async () => {
    const { result } = renderHook(() => useMemoryGame(ANIMALS));

    // Flip two matching cards
    act(() => {
      result.current.flipCard(0);
      result.current.flipCard(8);
    });

    const firstCard = result.current.cards.find((card) => card.index === 0);
    const secondCard = result.current.cards.find((card) => card.index === 8);

    // Check if cards are flipped back and score is updated
    expect(firstCard.isFlipped).toBe(true);
    expect(secondCard.isFlipped).toBe(true);
    expect(result.current.score).toEqual({ errors: 0, hits: 1 });
  });

  test('should set isWon to true when the game is won', async () => {
    const { result } = renderHook(() => useMemoryGame(ANIMALS));

    // Flip all the matching cards
    ANIMALS.forEach((_, index) => {
      act(() => {
        result.current.flipCard(index);
        result.current.flipCard(index + ANIMALS.length);
      });
    });

    // Check if isWon is true when all matches are made
    expect(result.current.isWon).toBe(true);
  });
});
