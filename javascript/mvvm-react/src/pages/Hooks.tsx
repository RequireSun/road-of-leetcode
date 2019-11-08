import React, { useState, useEffect } from 'react';

const ColorState = (prop: any) => {
    const [color, setColor] = useState('');

    useEffect(() => {
        setColor(`#${Math.floor(Math.random() * 255).toString(16)}${Math.floor(Math.random() * 255).toString(16)}${Math.floor(Math.random() * 255).toString(16)}`);

        return () => {
            console.log('destroyed!', color);
        };
    });

    return color;
};

const Comp1 = (props: { name: string; }) => {
    const color = ColorState(props);

    return (
        <div>
            <h1>My Name is: {props.name}</h1>
            <p>I'm {}</p>
        </div>
    );
};

export default () => {
    return (
        <div></div>
    );
};
