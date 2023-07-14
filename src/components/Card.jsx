import PropTypes from 'prop-types';

const Card = ({ imgUrl, title, flip, onClick }) => {
  return (
    <div
      className="border border-gray-200 cursor-pointer w-20 h-28 sm:w-40 sm:h-40 rounded-lg shadow"
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
