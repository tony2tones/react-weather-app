import React from 'react';
import { shallow } from 'enzyme';

import BrokenErrorMessage from './index';

test('should render the error message without crashing ', () => {
  const wrapper = shallow(<BrokenErrorMessage />);
  const expected = true;

  const actual = wrapper.find('.ErrorMessage').exists();

  expect(actual).toBe(expected);
});

test('should have the following error message', () => {
  const wrapper = shallow(<BrokenErrorMessage />);
  const expected = 'Somthing has gone horribly wrong, please do not panic.';

  const actual = wrapper.find('p').text();

  expect(actual).toBe(expected);
});

