import PropTypes from 'prop-types';

import useStyles from './styles';

const Button = ({ children, ...props }) => {
  const styles = useStyles();

  return (
    <button className={styles.button} type="button" {...props}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
};

export default Button;
