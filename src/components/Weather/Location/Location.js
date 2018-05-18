import PropTypes from 'prop-types';
import React from 'react';


const Location = ({ location }) => (
  <div>
    {location}
  </div>
);

Location.propTypes = {
  location: PropTypes.string.isRequired,
};

export default Location;
