import React, { useEffect, useState } from 'react'

let Timer = () => {
    let [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString())

    useEffect(() => {
        setTimeout(() => { setCurrentTime(new Date().toLocaleTimeString()) }, 1000)
    }, [currentTime]);

    return (
        <div>{currentTime}</div>
    )
}

export default Timer;