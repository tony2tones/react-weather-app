import React from 'react';

import './images.css';
import '../Weather';

// let img = '';

// const imageSwitch = (props) => {
//   if (props.icon) {
//     img = 'https://www.w3schools.com/html/img_girl.jpg';
//   } else {
//     img = '';
//   }
// };

const Images = props => (
  <div>
    <img className="picture" src="https://www.w3schools.com/html/img_girl.jpg" alt="its the sun" />
  </div>
);


export default Images;
