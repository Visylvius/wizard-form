import React from 'react';

import './styles.scss';

const Select = ({
  selectTestId,
  optionsArr,
  selectedVal,
  name,
  onChange,
  label,
}) => {
  return (
    <>
      <label className='Select-label'>{label}</label>
      <select
        data-testid={selectTestId}
        className='Select-mainWrapper'
        name={name}
        value={selectedVal}
        onChange={onChange}
      >
        <option value='default' defaultValue disabled>
          Choose...
        </option>
        {optionsArr.map((option, idx) => (
          <option
            data-testid={`SelectOption-${idx}`}
            key={option.value}
            value={option.value}
          >
            {option.displayValue}
          </option>
        ))}
      </select>
    </>
  );
};

export default Select;
