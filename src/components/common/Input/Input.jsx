import PropTypes from 'prop-types';
import { forwardRef } from 'react';

const Input = forwardRef(({ id, label, name, errorMessage, ...props }, ref) => (
  <div>
    {label && (
      <label
        htmlFor={id}
        className="block text-sm font-medium leading-6 text-white"
      >
        {label}
      </label>
    )}
    <input
      ref={ref}
      type="text"
      name={name}
      id={id}
      className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-bg-white/20 focus:ring-2 focus:ring-inset focus:ring-bg-white/20 sm:text-sm sm:leading-6"
      {...props}
    />
    {Boolean(errorMessage) && (
      <span className="text-red-500 pt-1">{errorMessage}</span>
    )}
  </div>
));

Input.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  errorMessage: PropTypes.string,
};

export default Input;
