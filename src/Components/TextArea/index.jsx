import React from 'react';
import classNames from 'classnames';

import './styles.scss';

const TextArea = ({ hasLabel, label, onChange, textAreaClasses, ...rest }) => {
  const textAreaClass = classNames('TextArea-component', textAreaClasses);

  return (
    <>
      {hasLabel && <label className='TextArea-label'>{label}</label>}
      <textarea className={textAreaClass} onChange={onChange} {...rest} />
    </>
  );
};

export default TextArea;
