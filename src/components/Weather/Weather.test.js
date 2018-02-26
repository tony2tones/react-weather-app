import React from 'react';
import { shallow } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';

import Weather from './index';
import register from 'ignore-styles';
register(['.sass', '.scss']);

// configure({ adapter: new Adapter() });

describe('<Weather />', () => {
  let wrapper;
  beforeEach(() => { wrapper = shallow(<Weather />); });

  it('should render something cool...still practicing at the mo', () => {
    expect(wrapper.find('div.iconHeader')).to.Have.Length(1);
  });
});
