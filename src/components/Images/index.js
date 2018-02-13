import React from 'react';

import './images.css';
import '../Weather';

const Images = (props) => {
  if (props.icon === '01d') {
    let imageSource = require('../../assets/img/sunny-512.png');
    if (props.icon === '02d') {
      imageSource = require('../../assets/img/cloud_64.svg');
    } return (
      <div>
        <img className="Icon" src={imageSource} alt="a cloud icon" height="42" width="42" />
      </div>
    );
  }
};
export default Images;
