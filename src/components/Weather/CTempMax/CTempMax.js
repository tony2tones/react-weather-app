import PropTypes from 'prop-types';
import React from 'react';


const CTempMax = ({ cTempMax }) => (
  <div>
    {cTempMax} °C
  </div>
);

CTempMax.propTypes = {
  cTempMax: PropTypes.string.isRequired,
};

export default CTempMax;
