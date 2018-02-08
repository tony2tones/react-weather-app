import React from 'react';

import './images.css';

const Images = props => (
  <div className="Images">
    <p>toasty Test {props.icon}</p>
    <img src="https://www.w3schools.com/html/img_girl.jpg" alt="its the sun" />
  </div>
);


export default Images;
