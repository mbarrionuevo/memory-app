import PropTypes from 'prop-types';
import { forwardRef } from 'react';
import useStyles from './styles';

const Input = forwardRef(({ id, label, name, errorMessage, ...props }, ref) => {
  const styles = useStyles({ hasError: Boolean(errorMessage) });

  return (
    <div>
      {label && (
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
      )}
      <input
        ref={ref}
        type="text"
        name={name}
        id={id}
        className={styles.input}
        {...props}
      />
      {Boolean(errorMessage) && (
        <span className={styles.errorMessage}>{errorMessage}</span>
      )}
    </div>
  );
});

Input.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  errorMessage: PropTypes.string,
};

export default Input;
