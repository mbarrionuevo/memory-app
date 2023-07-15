import PropTypes from 'prop-types';
import { Button } from './common';

const ErrorScreen = ({ refetch }) => {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-xl text-white">Oops, something went wrong!</h1>
      <Button onClick={refetch}>Try again</Button>
    </div>
  );
};

ErrorScreen.propTypes = {
  refetch: PropTypes.bool,
};

export default ErrorScreen;
