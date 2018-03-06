import React from 'react';
import { shallow } from 'enzyme';

import Weather from './index';

describe('<Weather />', () => {
  const C_TEMP = 'C_TEMP';
  const LOCATION = 'LOCATION';
  const C_TEMP_MAX = 'C_TEMP_MAX';
  const C_TEMP_MIN = 'C_TEMP_MIN';
  const WEATHER_NAME = 'WEATHER_NAME';

  it('should render an `.tablestyle`', () => {
    const wrapper = shallow(<Weather cTemp={C_TEMP} location={LOCATION} />);
    const expected = true;

    const actual = wrapper.find('.tablestyle').exists();

    expect(actual).toBe(expected);
  });

  it('Passes the props through correctly', () => {
    const wrapper = shallow(<Weather
      location={LOCATION}
      cTemp={C_TEMP}
      cTempMax={C_TEMP_MAX}
      cTempMin={C_TEMP_MIN}
      weatherNiceName={WEATHER_NAME}
    />);
    const expectedLocation = LOCATION;
    const expectedCTemp = `${C_TEMP}°C`;
    const expectedMaxCTemp = `${C_TEMP_MAX}°C`;
    const expectedMinCTemp = `${C_TEMP_MIN}°C`;
    const expectedWeatherName = WEATHER_NAME;

    const actualLocation = wrapper.find('[data-qa="weather__location"]').text();
    const actualCTemp = wrapper.find('[data-qa="weather__temperature__celcius"]').text();
    const actualMaxCTemp = wrapper.find('[data-qa="weather__temperature__celcius__max"]').text();
    const actualMinCTemp = wrapper.find('[data-qa="weather__temperature__celcius__min"]').text();
    const actualWeatherName = wrapper.find('[data-qa="weather__name"]').text();

    expect(actualLocation).toBe(expectedLocation);
    expect(actualCTemp).toBe(expectedCTemp);
    expect(actualMaxCTemp).toBe(expectedMaxCTemp);
    expect(actualMinCTemp).toBe(expectedMinCTemp);
    expect(actualWeatherName).toBe(expectedWeatherName);
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
