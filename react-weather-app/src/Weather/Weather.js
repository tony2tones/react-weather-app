import React from 'react';

const weather = (props) => {
    return (
        <div>
            <p> Latitude: {props.latitude} </p>
            <p> Longitude: {props.longitude} </p>
        </div>
    )
}

export default weather;