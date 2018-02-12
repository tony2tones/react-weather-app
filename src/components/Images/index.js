import React from 'react';

import './images.css';
import '../Weather';

const Images = (props) => {
  if (props.icon === '02d') {
    console.log(props.icon);
    return (
      <div className="Icon">
        <p> you have an icon to reference {props.icon} </p>
        <img src="https://www.ibm.com/design/assets/language/resources/icon-library/icons/svg/object-based/cloud_64.svg" alt="a cloud icon" height="42" width="42" />
      </div>
    );
  }
};
export default Images;
