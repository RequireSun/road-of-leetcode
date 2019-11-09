import React, { useState, useEffect } from 'react';

const ColorState = (props: any) => {
    const [color, setColor] = useState('');

    const interval = setInterval(() => {
        setColor(`#${Math.floor(Math.random() * 255).toString(16)}${Math.floor(Math.random() * 255).toString(16)}${Math.floor(Math.random() * 255).toString(16)}`);
    }, 1000);

    useEffect(() => {
        return () => {
            console.log('destroyed!', color);
            clearInterval(interval);
        };
    });

    return color;
};

const ClockState = (props: any) => {
    const [age, setAge] = useState(0);

    const interval = setInterval(() => {
        setAge(age + 1);
    }, 1000);

    useEffect(() => {
        return () => {
            clearInterval(interval);
        };
    });

    return age;
};

const Comp1 = (props: { name: string; }) => {
    const color = ColorState(props);
    const age = ClockState(props);

    return (
        <div>
            <h1>My Name is: {props.name}</h1>
            <p style={{color: color}}>I'm in {color}.</p>
            <p>I'm {age} seconds old.</p>
        </div>
    );
};

export default () => {
    return (
        <div>
            <Comp1 name={'Comp1'} />
            <Comp1 name={'Comp2'} />
            <Comp1 name={'Comp3'} />
        </div>
    );
};
