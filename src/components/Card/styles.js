import classNames from 'classnames';

const useStyles = () => ({
  card: (flip) =>
    classNames(
      'border select-none border-gray-200 w-20 h-28 md:w-40 md:h-40 rounded-lg shadow transition-colors ease-in duration-300 hover:bg-slate-600',
      {
        'pointer-events-none': flip,
        'cursor-pointer': !flip,
      }
    ),
  img: 'object-cover rounded-lg w-full h-full',
  question:
    'flex justify-center items-center h-full text-white text-5xl md:text-9xl',
});

export default useStyles;
