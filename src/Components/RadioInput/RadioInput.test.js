import React from 'react';
import renderer from 'react-test-renderer';

import RadioInput from './index';

describe('render', () => {
  test('should render properly', () => {
    const tree = renderer.create(
      <RadioInput shouldShowLabel labelText='stuff' />,
    );

    expect(tree).toMatchSnapshot();
  });
});
