import React from 'react';
import { shallow } from 'enzyme';

import ErrorMessage from './index';

test('should render the error message without crashing ', () => {
  const wrapper = shallow(<ErrorMessage />);
  const expected = true;

  const actual = wrapper.find('.ErrorMessage').exists();

  expect(actual).toBe(expected);
});

test('should have the following error message', () => {
  const wrapper = shallow(<ErrorMessage />);
  const expected = 'Please enable your GPS location to provide you with the latest weather updates.';

  const actual = wrapper.find('p').text();

  expect(actual).toBe(expected);
});

