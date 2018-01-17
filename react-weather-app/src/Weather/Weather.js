import React from 'react';

const weather = (props) => {
    const style ={
        padding: '40px',
        margin: '250px',
        border:'solid 2px',
        textAlign: 'center'
    }
    return (
        <div style={style}>
            <th>Toast </th>
                <tr>
                    <div> Temperature in Celsius: </div>
                    <div> {props.cTemp} </div></tr>
                <tr>
                    <p> Whats the weather: {props.weatherNiceName} </p>
                </tr>
        </div>
    )
}

export default weather;