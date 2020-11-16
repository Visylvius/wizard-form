import React from 'react';
import classNames from 'classnames';

import './styles.scss';

const RadioInput = ({
  containerClasses,
  name,
  radioInputClasses,
  value,
  shouldShowLabel,
  labelText,
  id,
  ...rest
}) => {
  const containerClassNames = classNames(
    'RadioInput-container',
    containerClasses,
  );
  const radioInputClassNames = classNames(
    'RadioInput-component',
    radioInputClasses,
  );

  return (
    <div className={containerClassNames}>
      <input
        className={radioInputClassNames}
        type='radio'
        value={value}
        name={name}
        id={id}
        {...rest}
      />
      {shouldShowLabel && labelText && (
        <label className='RadioInput-label' htmlFor={id}>
          {labelText}
        </label>
      )}
    </div>
  );
};

export default RadioInput;
