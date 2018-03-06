import React from 'react';
import { shallow } from 'enzyme';

import Weather from './index';

describe('<Weather />', () => {
  const C_TEMP = 'C_TEMP';
  const LOCATION = 'LOCATION';
  const C_TEMP_MAX = 'C_TEMP_MAX';

  it('should render an `.tablestyle`', () => {
    const wrapper = shallow(<Weather cTemp={C_TEMP} location={LOCATION} />);
    const expected = true;

    const actual = wrapper.find('.tablestyle').exists();

    expect(actual).toBe(expected);
  });

  it('Passes the props through correctly', () => {
    const wrapper = shallow(<Weather cTemp={C_TEMP} location={LOCATION} cTempMax={C_TEMP_MAX} />);
    const expectedCTemp = `${C_TEMP}°C`;
    const expectedMaxCTemp = `${C_TEMP_MAX}°C`;
    const expectedLocation = LOCATION;

    const actualCTemp = wrapper.find('[data-qa="weather__temperature__celcius"]').text();
    const actualMaxCTemp = wrapper.find('[data-qa="weather__temperature__celciusMax"]').text();
    const actualLocation = wrapper.find('.weather__location').text();

    expect(actualCTemp).toBe(expectedCTemp);
    expect(actualMaxCTemp).toBe(expectedMaxCTemp);
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
