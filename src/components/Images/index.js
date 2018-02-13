import React from 'react';

import './images.css';
import '../Weather';

const Images = (props) => {
  if (props.icon === '01d') {
    let imageSource = require('../../assets/img/sun.svg');
    if (props.icon === '02d') {
      imageSource = require('../../assets/img/cloud_64.svg');
    } return (
      <div>
        <img src={imageSource} alt="a cloud icon" />
      </div>
    );
  }
};
export default Images;
