import { useRef } from 'react';
import PropTypes from 'prop-types';

const User = ({ onGameStart }) => {
  const inputRef = useRef();

  const handlePlayGame = () => {
    localStorage.setItem('player-name', inputRef.current.value);
    onGameStart();
  };

  return (
    <section className="flex flex-col gap-4 items-start h-full">
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
            autoComplete="none"
            type="text"
            name="player-name"
            id="player-name"
            className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-bg-white/20 focus:ring-2 focus:ring-inset focus:ring-bg-white/20 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
      <div className="justify-center w-full flex">
        <button
          className="rounded-md bg-white/10 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-white/20"
          onClick={handlePlayGame}
        >
          Play Game
        </button>
      </div>
    </section>
  );
};

User.propTypes = {
  onGameStart: PropTypes.func,
};

export default User;
