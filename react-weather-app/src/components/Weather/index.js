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
            <table>
                <thead>
                    <tr>
                        <th>Toast </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Temperature in Celsius: </td>
                        <td>{props.fTemp}</td>
                    </tr>
                    <tr>
                        <td>Whats the weather: {props.weatherNiceName}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default weather;