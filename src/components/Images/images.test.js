import React from 'react';
import { shallow } from 'enzyme';

import Images from './index';

const ICON = '01d';

// const Images = require('./index.js');

test('should check image function', () => {
  const wrapper = shallow(<Images
    icon={ICON}
  />);
  const expected = '../../assets/img/cloud_64.svg';

  const actual = wrapper.find('src').text();

  expect(actual).toBe(expected);
});

