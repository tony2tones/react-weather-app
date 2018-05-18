import PropTypes from 'prop-types';
import React from 'react';


const CTemp = ({ cTemp }) => (
  <div>
    {cTemp} °C
  </div>
);

CTemp.propTypes = {
  cTemp: PropTypes.string.isRequired,
};

export default CTemp;
