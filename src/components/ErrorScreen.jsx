import PropTypes from 'prop-types';

const ErrorScreen = ({ refetch }) => {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-xl text-white">Oops, something went wrong!</h1>
      <button
        type="button"
        className="rounded-md bg-white/10 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-white/20"
        onClick={refetch}
      >
        Try again!
      </button>
    </div>
  );
};

ErrorScreen.propTypes = {
  refetch: PropTypes.bool,
};

export default ErrorScreen;
