import PropTypes from 'prop-types';
import { Button } from '../common';

import useStyles from './styles';

const ErrorScreen = ({ refetch }) => {
  const styles = useStyles();

  return (
    <div className={styles.container}>
      <h1 className={styles.text}>Oops, something went wrong!</h1>
      <Button onClick={refetch}>Try again</Button>
    </div>
  );
};

ErrorScreen.propTypes = {
  refetch: PropTypes.bool,
};

export default ErrorScreen;
