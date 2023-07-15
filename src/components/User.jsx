import { useRef } from 'react';
import PropTypes from 'prop-types';

import { setStoreItem } from 'utils/localStore';
import { PLAYER_NAME_KEY } from 'constants';

const User = ({ onGameStart }) => {
  const inputRef = useRef();

  const handlePlayGame = () => {
    setStoreItem(PLAYER_NAME_KEY, inputRef.current.value || 'unknown');
    onGameStart();
  };

  return (
    <form
      className="flex flex-col gap-4 items-start h-full"
      onSubmit={handlePlayGame}
    >
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium leading-6 text-white"
        >
          Player name
        </label>
        <div className="mt-2 w-[250px]">
          <input
            ref={inputRef}
            autoFocus
            autoComplete="none"
            type="text"
            name={PLAYER_NAME_KEY}
            id={PLAYER_NAME_KEY}
            className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-bg-white/20 focus:ring-2 focus:ring-inset focus:ring-bg-white/20 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
      <div className="justify-center w-full flex">
        <button
          className="rounded-md bg-white/10 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-white/20"
          type="submit"
        >
          Play Game
        </button>
      </div>
    </form>
  );
};

User.propTypes = {
  onGameStart: PropTypes.func,
};

export default User;
