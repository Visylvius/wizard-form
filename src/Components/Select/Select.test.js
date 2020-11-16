import React from 'react';
import renderer from 'react-test-renderer';

import Select from './index';

describe('render', () => {
  test('should render properly', () => {
    const tree = renderer.create(
      <Select
        optionsArr={[
          { displayValue: 'test', value: 'stuff' },
          { displayValue: 'default', value: 'default' },
        ]}
        selectedVal='default'
      />,
    );

    expect(tree).toMatchSnapshot();
  });
});
