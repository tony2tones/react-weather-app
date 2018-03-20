import React from 'react';
import { shallow } from 'enzyme';

import ErrorMessage from './index';

test('should have the following error message', () => {
  const wrapper = shallow(<ErrorMessage />);
  const expected = 'Please enable your GPS location to provide you with the latest weather updates.';

  const actual = wrapper.find('p').text();

  expect(actual).toBe(expected);
});

