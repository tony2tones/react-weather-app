import React from 'react';
import PropTypes from 'prop-types';

import './images.css';
import '../Weather';

let imageSource = '';
/* eslint-disable global-require */

const Images = ({ icon }) => {
  if (icon === '01d' || icon === '01n') {
    imageSource = require('../../assets/img/cloud_64.svg');
  } else if (icon === '02d' || icon === '02n') {
    imageSource = require('../../assets/img/cloud_64.svg');
  } else if (icon === '03d' || icon === '03n') {
    imageSource = require('../../assets/img/cloud_64.svg');
  } else if (icon === '04d' || icon === '04n') {
    imageSource = require('../../assets/img/cloud_64.svg');
  } else {
    imageSource = require('../../assets/img/default.svg');
  }
  return (
    <div>
      <img src={imageSource} alt="a cloud icon" />
    </div>
  );
};

Images.propTypes = {
  icon: PropTypes.string.isRequired,
};

export default Images;
