import PropTypes from 'prop-types';

const Card = ({ imgUrl, title, flip, onClick }) => {
  return (
    <div
      className={`border select-none border-gray-200 ${
        flip ? 'pointer-events-none' : 'cursor-pointer'
      } w-20 h-28 min-w-12 md:w-40 md:h-40 rounded-lg shadow transition-colors ease-in duration-300 hover:bg-slate-600`}
      onClick={onClick}
    >
      {flip && (
        <img
          className="object-cover w-full h-full rounded-lg"
          src={imgUrl}
          alt={title}
        />
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
