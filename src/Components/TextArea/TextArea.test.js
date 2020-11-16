import React from 'react';
import renderer from 'react-test-renderer';

import TextArea from './index';

describe('render', () => {
  test('should render properly', () => {
    const tree = renderer.create(
      <TextArea hasLabel label='this is a label' value='hello' />,
    );

    expect(tree).toMatchSnapshot();
  });
});
