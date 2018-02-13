import React from 'react';

import './images.css';
import '../Weather';

let imageSource = '../../assets/img/default.svg';

const Images = (props) => {
  if (props.icon === '01d') {
    imageSource = require('../../assets/img/sun.svg');
  } else if (props.icon === '02d') {
    imageSource = require('../../assets/img/cloud_64.svg');
  } else if (props.icon === '03d') {
    imageSource = require('../../assets/img/cloud_64.svg');
  }
  return (
    <div>
      <img src={imageSource} alt="a cloud icon" />
    </div>
  );
};
export default Images;
