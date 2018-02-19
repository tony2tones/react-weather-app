import PropTypes from 'prop-types';
import React from 'react';

import './images.css';
import '../Weather';

let imageSource = '';
/* eslint-disable global-require */

const Images = ({ icon } = this.props) => {
  if (icon === '01d' || icon === '01n') {
    imageSource = require('../../assets/img/sun.svg');
  } else if (icon === '02d' || icon === '02n') {
    imageSource = require('../../assets/img/partly-cloudy-day.png');
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

Images.protoTypes = {
  icon: PropTypes.string.isRequired,
};

export default Images;
