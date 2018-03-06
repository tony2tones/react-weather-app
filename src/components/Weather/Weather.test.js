import React from 'react';
import { shallow } from 'enzyme';

import Weather from './index';

const enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-15');

enzyme.configure({ adapter: new Adapter() });
describe('<Weather />', () => {
  it('should render an `.tablestyle`', () => {
    const wrapper = shallow(<Weather />);
    expect(wrapper.find('.tablestyle')).to.have.length(1);
  });

  it('should check for classname iconHeader', () => {
    const wrapper = shallow((
      <Weather>
        <div className="iconHeader" />
      </Weather>
    ));
    expect(wrapper.contains(<div className="iconHeader" />)).toEqual(true);
  });
  it('should render a button', () => {
    const wrapper = shallow(<Weather />);
    expect(wrapper).to.have.length(1);
  });
  it('should render nadda', () => {
  });
});
