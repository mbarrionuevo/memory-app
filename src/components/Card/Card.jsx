import PropTypes from 'prop-types';

import useStyles from './styles';

const Card = ({ imgUrl, title, flip, onClick }) => {
  const styles = useStyles();
  return (
    <div className={styles.card(flip)} onClick={onClick}>
      {flip ? (
        <img className={styles.img} src={imgUrl} alt={title} />
      ) : (
        <div className={styles.question}>?</div>
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
