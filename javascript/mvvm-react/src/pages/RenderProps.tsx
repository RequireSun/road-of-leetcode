import React, {ReactElement, useState} from 'react';

const Outer = (props: {
    render: (count: number, setCount: (arg: number) => void) => ReactElement
}) => {
    const [count, setCount] = useState(0);

    return <div>
        <h3>Outer</h3>
        {props.render(count, setCount)}
    </div>
};

const Inner = (props: {
    count: number;
    setCount: (arg: number) => void;
    index: number;
}) => (
    <div>
        <h4>Inner: {props.index}</h4>
        <p>Count: {props.count}</p>
        <button onClick={() => props.setCount(props.count + 1)}>click me</button>
    </div>
);

const Container = () => (
    <div>
        <Outer render={(count: number, setCount: (arg: number) => void) => (
            <Inner count={count} setCount={setCount} index={1} />
        )}/>
        <Outer render={(count: number, setCount: (arg: number) => void) => (
            <Inner count={count} setCount={setCount} index={2} />
        )}/>
    </div>
);

const COuter = (props: {
    children: (count: number, setCount: (arg: number) => void) => ReactElement,
}) => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h3>Outer</h3>
            {props.children(count, setCount)}
        </div>
    );
};

const CContainer = () => (
    <div>
        <COuter>
            {(count: number, setCount: (arg: number) => void) => (
                <Inner count={count} setCount={setCount} index={3} />
            )}
        </COuter>
    </div>
);

export default () => (
    <div>
        <Container />
        <CContainer />
    </div>
);
