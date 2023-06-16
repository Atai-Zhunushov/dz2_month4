import React, {useState} from 'react';

const Component = () => {
    const [colorRed , setColorRed] = useState('red')
    const [colorBlue , setColorBlue] = useState('blue')

    const blue = () => {
        setColorRed(colorBlue)
        setColorBlue(colorRed)
    }
    const red = () => {
        setColorBlue(colorRed)
        setColorRed(colorBlue)
    }

    return (
        <div style={{
            display: "flex",
            gap: 30,
            justifyContent: "center"
        }}>
            <div style={{
                width: 100,
                height: 100,
                backgroundColor: colorRed
            }} onClick={red}></div>
            <div style={{
                width: 100,
                height: 100,
                backgroundColor: colorBlue
            }} onClick={blue}></div>
        </div>
    );
};

export default Component;