import React, { useState } from 'react'


function ConvertCelToFah() {
    const [unit, setUnit] = useState('c');
    const [temp, setTemp] = useState(0);


    function Celsius(e) {
        setUnit('c')
        setTemp(e)
    }
    function Fahrenheit(e) {
        setUnit('f')
        setTemp(e)
    }

    const celsius = unit === 'f' ? (temp - 32) * 5 / 9 : temp;
    const fahrenheit = unit === 'c' ? (temp * 9 / 5) + 32 : temp;

    return (
        <div className="container">
            <div className="title1" style={{
                color: '#404040',
                position: 'relative',
                bottom: '-50px',
                left: '20px',
            }}>
                <h2>Celcius To Fahrenheit</h2>
            </div>

            <div style={{
                position: 'relative',
                left: '-200px',
            }}>
                <span className="dot" style={{
                    height: '25px',
                    width: '25px',
                    background: 'red',
                    borderRadius: '50%',
                    display: 'inline-block'
                }}></span>  &nbsp;
                <span className="dot" style={{
                    height: '25px',
                    width: '25px',
                    background: 'yellow ',
                    borderRadius: '50%',
                    display: 'inline-block'
                }}></span>  &nbsp;
                <span className="dot" style={{
                    height: '25px',
                    width: '25px',
                    background: 'green',
                    borderRadius: '50%',
                    display: 'inline-block'
                }}></span>
            </div>

            <div className="title2" style={{
                margin: 'auto',
                position: 'absolute',
                left: '33%',
                top: '15%',
                border: '5px solid gray',
                padding: '10px',
                background: '#D3D3D3'
            }}>
                <input type="number" value={celsius} onChange={(event) => Celsius(event.target.value)} />
                <span> Celsius</span>
                <span> = </span>
                <input type="number" value={fahrenheit} onChange={(event) => Fahrenheit(event.target.value)} />
                <span> Fahrenheit</span>
            </div>
        </div >
    )
}

export default ConvertCelToFah