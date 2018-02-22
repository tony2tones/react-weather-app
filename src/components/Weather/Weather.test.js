import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Weather from './index';

configure({ adapter: new Adapter() });

describe('<Weather />', () => {
  it('should render something cool...still practicing at the mo', () => {
    const wrapper = shallow(<Weather />);
    expect(wrapper.find(Weather)).toHaveLength(1);
  });
});
