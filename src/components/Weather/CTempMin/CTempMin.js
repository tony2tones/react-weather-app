import PropTypes from 'prop-types';
import React from 'react';


const CTempMin = ({ cTempMin }) => (
  <div>
    {cTempMin} °C
  </div>
);

CTempMin.propTypes = {
  cTempMin: PropTypes.string.isRequired,
};

export default CTempMin;
