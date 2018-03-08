import React from 'react';
import { shallow } from 'enzyme';

import ErrorMessage from './index';

test('should render an ', () => {
  const wrapper = shallow(<ErrorMessage />);
  const expected = true;

  const actual = wrapper.find('.ErrorMessage').exists();

  expect(actual).toBe(expected);
});
