import React, { useState } from 'react';

function StateHandling() {
    const [count, setCount] = useState(100);

    const [red, setRed] = useState(255);
    const [green, setGreen] = useState(255);
    const [blue, setBlue] = useState(255);

    const [catHeight, setCatHeight] = useState(100);
    const [rotation, setRotation] = useState(0);

    function changeBGColor() {
        setRed(Math.floor(Math.random() * 256));
        setGreen(Math.floor(Math.random() * 256));
        setBlue(Math.floor(Math.random() * 256));
    }

    function enhanceHeight() {
        setCatHeight(catHeight + 10);
    }

    function rotateCat() {
        setRotation(rotation + 30);
    }

    return (
        <div>
            <h2>Change Background Colour</h2>

            <div
                style={{
                    backgroundColor: `rgb(${red}, ${green}, ${blue})`,
                    height: '300px',
                    width: '300px'
                }}
            >
                <img
                    src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131"
                    height={catHeight}
                    width={200}
                    alt="Cute cat"
                    style={{
                        transform: `rotate(${rotation}deg)`
                    }}
                />
            </div>

            <br />

            <button onClick={changeBGColor}>
                Change Background Colour
            </button>

            <h2>Cat Height: {catHeight}px</h2>

            <button onClick={enhanceHeight}>
                Increase Height
            </button>

            <br />
            <br />

            <button onClick={rotateCat}>
                Rotate Cat 

                
            </button>

            <h3>Rotation: {rotation}°</h3>
        </div>
    );
}

export default StateHandling;