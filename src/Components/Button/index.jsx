import React from 'react';
import classNames from 'classnames';

import './styles.scss';

const Button = ({ buttonClasses, children, shouldCenter, ...rest }) => {
  const buttonClassNames = classNames('Button-component', buttonClasses);

  return (
    <>
      {shouldCenter ? (
        <div className='Button-container'>
          <button className={buttonClassNames} {...rest}>
            {children}
          </button>
        </div>
      ) : (
        <button className={buttonClassNames} {...rest}>
          {children}
        </button>
      )}
    </>
  );
};

export default Button;
