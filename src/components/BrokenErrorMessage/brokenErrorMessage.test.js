import React from 'react';
import { shallow } from 'enzyme';

import BrokenErrorMessage from './index';

test('should have the following error message', () => {
  const wrapper = shallow(<BrokenErrorMessage />);
  const expected = 'Something has gone horribly wrong, please do not panic.';

  const actual = wrapper.find('p').text();

  expect(actual).toBe(expected);
});

