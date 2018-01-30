import React from 'react';
import './weather.css';

const weather = (props) => {
    const style = {
        paddingTop: '130px',
        position: 'absolute',
        left: '15%',
        right: '15%'
    }
    return (
        <div style={style}>
            <hr />
            <table className="table">
                <thead>
                    <tr>
                        <th colSpan="4">Weather</th>

                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Temperature: </td>
                        <td>{props.cTemp}°C</td>
                    </tr>
                    <tr>
                        <td>Whats the weather: </td>
                        <td> {props.weatherNiceName}</td>
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
            <hr />
            <div>
                <p>Done by <a href="https://github.com/tony2tones" target="_blank">Anthony</a></p>
            </div>

        </div>
    )
}

export default weather;