import React from 'react'

const TemperatureInput = ({scale, temp, onChange}) => {
    let scaleNames = {
        'c': 'Celcium',
        'f': 'Fahrenheit'
    }
    return (
        <div>
            <label htmlFor="">{scaleNames[scale]}</label>
            <input type="text" value={temp} onChange={onChange}/>
        </div>
    )
}

export default TemperatureInput;