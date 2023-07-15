import PropTypes from 'prop-types';

const Card = ({ imgUrl, title, flip, onClick }) => {
  return (
    <div
      className={`border select-none border-gray-200 ${
        flip ? 'pointer-events-none' : 'cursor-pointer'
      } w-20 h-28 md:w-40 md:h-40 rounded-lg shadow transition-colors ease-in duration-300 hover:bg-slate-600`}
      onClick={onClick}
    >
      {flip ? (
        <img
          className="object-cover rounded-lg w-full h-full"
          src={imgUrl}
          alt={title}
        />
      ) : (
        <div className="flex justify-center items-center h-full text-white text-5xl md:text-9xl">
          ?
        </div>
      )}
    </div>
  );
};

Card.propTypes = {
  imgUrl: PropTypes.string,
  title: PropTypes.string,
  flip: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Card;
