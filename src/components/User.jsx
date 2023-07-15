import { useRef, useState } from 'react';
import PropTypes from 'prop-types';

import { setStoreItem } from 'utils/localStore';
import { PLAYER_NAME_KEY } from 'constants';
import { Button, Input } from './common';

const User = ({ onGameStart }) => {
  const inputRef = useRef();
  const [inputError, setError] = useState('');

  const handlePlayGame = (e) => {
    e.preventDefault();

    if (inputRef.current.value) {
      setStoreItem(PLAYER_NAME_KEY, inputRef.current.value);
      onGameStart();
    } else {
      setError('This field is required');
    }
  };

  const handleOnBlur = () => {
    if (inputRef.current.value) {
      setError('');
    }
  };

  return (
    <form
      className="flex flex-col gap-4 items-start h-full"
      onSubmit={handlePlayGame}
    >
      <div className="mt-2 w-[250px]">
        <Input
          ref={inputRef}
          autoFocus
          autoComplete="none"
          maxLength={20}
          name={PLAYER_NAME_KEY}
          id={PLAYER_NAME_KEY}
          label="Player name"
          errorMessage={inputError}
          onBlur={handleOnBlur}
        />
      </div>
      <div className="justify-center w-full flex">
        <Button type="submit">Play Game</Button>
      </div>
    </form>
  );
};

User.propTypes = {
  onGameStart: PropTypes.func,
};

export default User;
