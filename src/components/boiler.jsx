import React, { useState } from 'react'
import TemperatureInput from './temperatureInput';

const Boiler = () => {

    let [data, setTemp] = useState({temperature: '', scale: 'c'});
    function toCelsius(fahrenheit) {
        let value = parseFloat(fahrenheit);
        if (Number.isNaN(value)) return ''
        return (fahrenheit - 32) * 5 / 9;
    }

    function toFahrenheit(celsius) {
        let value = parseFloat(celsius);
        if (Number.isNaN(value)) return ''
        return (celsius * 9 / 5) + 32;
    }

    const celc = data.scale === 'c' ? data.temperature : toCelsius(data.temperature);
    const fer = data.scale === 'f' ? data.temperature : toFahrenheit(data.temperature)

    const onCelcChange = (e) => {
        setTemp({...data, temperature: e.target.value, scale: 'c'})
    }
    const onFerChange = (e) => {
        setTemp({...data, temperature: e.target.value, scale: 'f'})
    }
    return (

        <div>
            <div>
                <TemperatureInput temp={celc} scale='c' onChange={onCelcChange}/>
                <TemperatureInput temp={fer} scale='f' onChange={onFerChange}/>
            </div>
            <div>
                {celc >= 100
                    ? 'Water is boiling'
                    : `Water isn't boiling`
                }
            </div>

        </div>
    )
}

export default Boiler;