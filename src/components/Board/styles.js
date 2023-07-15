import classNames from 'classnames';

const useStyles = () => ({
  spinner: 'animate-spin mr-3 h-10 w-10 text-white',
  boardContainer:
    'flex h-full flex-col justify-center wide:landscape:justify-start gap-2',
  scoreContainer: 'flex flex-col w-full items-center justify-start gap-2',
  congratulations:
    'flex gap-1 text-white text-sm sm:text-base font-medium text-center',
  score: 'flex gap-4 text-white',
  buttonsContainer: 'flex gap-4',
  cardsContainer: (isValidation) =>
    classNames(
      'grid h-auto grid-cols-4 justify-items-center place-content-center wide:landscape:place-content-start place-items-center gap-3 md:gap-4 w-full max-w-3xl min-w-[320px]',
      { 'pointer-events-none': isValidation }
    ),
});

export default useStyles;
