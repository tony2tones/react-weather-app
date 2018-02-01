import React from 'react';
import './weather.css';

const Weather = (props) => (
        <div class="tablestyle">
            <hr />
            <table className="table">
                <thead>
                    <tr>
                        <th colSpan="4">Weather</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Location: </td>
                        <td> {props.location}</td>
                    </tr>
                    <tr>
                        <td>Temperature: </td>
                        <td>{props.cTemp}°C</td>
                    </tr>
                    <tr>
                        <td>Max Temperature: </td>
                        <td> {props.cTempMax}°C</td>
                    </tr>
                    <tr>
                        <td>Min Temperature: </td>
                        <td> {props.cTempMin}°C</td>
                    </tr>
                </tbody>
            </table>
            <div>
                <p>{props.weatherNiceName}</p>
            </div>
            <hr />
            <div>
                <p>Done by <a href="https://github.com/tony2tones" target="_blank">Anthony</a></p>
            </div>
    </div>
)

export default Weather;
