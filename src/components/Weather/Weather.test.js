import React from 'react';

import { shallow } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';

import Weather from './index';

// configure({ adapter: new Adapter() });

describe('<Weather />', () => {
  it('should render something cool...still practicing at the mo', () => {
    const wrapper = shallow(<Weather />);
    expect(wrapper.find('className').getText('.iconHeader')).toHaveLength(1);
  });
});
