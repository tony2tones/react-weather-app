import React from 'react';
import { shallow } from 'enzyme';

import Weather from './index';

describe('<Weather />', () => {
  const C_TEMP = 'C_TEMP';
  const LOCATION = 'LOCATION';

  it('should render an `.tablestyle`', () => {
    const wrapper = shallow(<Weather cTemp={C_TEMP} location={LOCATION} />);
    const expected = true;

    const actual = wrapper.find('.tablestyle').exists();

    expect(actual).toBe(expected);
  });

  it('Passes the props through correctly', () => {
    const wrapper = shallow(<Weather cTemp={C_TEMP} location={LOCATION} />);
    const expectedCTemp = `${C_TEMP}°C`;
    const expectedLocation = LOCATION;

    const actualCTemp = wrapper.find('[data-qa="weather__temperature__celcius"]').text();
    const actualLocation = wrapper.find('.weather__location').text();

    expect(actualCTemp).toBe(expectedCTemp);
    expect(actualLocation).toBe(expectedLocation);
  });

  // it('should check for classname iconHeader', () => {
  //   const wrapper = shallow((
  //     <Weather>
  //       <div className="iconHeader" />
  //     </Weather>
  //   ));
  //   expect(wrapper.contains(<div className="iconHeader" />)).toEqual(true);
  // });
  // it('should render a button', () => {
  //   const wrapper = shallow(<Weather />);
  //   expect(wrapper).to.have.length(1);
  // });
  // it('should render nadda', () => {
  // });
});
