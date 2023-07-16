import { render } from '@testing-library/react';

import { PLAYER_NAME_KEY } from 'constants/index';

import MemoryGame from './MemoryGame';

describe('MemoryGame', () => {
  test('should render the User component', () => {
    const { getByText } = render(<MemoryGame />);
    getByText('Player name');
  });

  test('should render the Board component', () => {
    window.localStorage.setItem(PLAYER_NAME_KEY, 'test');

    const { queryByText } = render(<MemoryGame />);
    expect(queryByText('Play Game')).toBeNull();
  });
});
