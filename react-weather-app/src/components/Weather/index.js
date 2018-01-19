import React from 'react';
import './weather.css';

const weather = (props) => {
    
    return (
        <div>
            <hr/>
            <table className="table">
                <thead>
                    <tr>
                        <th colSpan="4">Weather </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Temperature in Celsius: </td>
                        <td>{props.fTemp}</td>
                    </tr>
                    <tr>
                        <td>Whats the weather: </td>
                        <td> {props.weatherNiceName}</td>
                    </tr>
                </tbody>
            </table>
            <hr/>
        </div>
    )
}

export default weather;