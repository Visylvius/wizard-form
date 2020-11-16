import React from 'react';
import renderer from 'react-test-renderer';

import Button from './index';

describe('render', () => {
  test('should render properly', () => {
    const tree = renderer.create(<Button>Hello</Button>);

    expect(tree).toMatchSnapshot();
  });
});
