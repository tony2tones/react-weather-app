// import React from 'react';
import { shallow } from 'enzyme';

import Weather from './index';

describe('<Weather />', () => {
  let wrapper;
  beforeEach(() => { wrapper = shallow(<Weather />); });

  it('should render something cool...still practicing at the mo', () => {
    expect(wrapper.find('div.iconHeader')).to.Have.Length(1);
  });
});
