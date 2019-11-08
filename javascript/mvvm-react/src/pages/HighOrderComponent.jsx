import React from 'react';

const wrapColor = (Component, fn) => {
    return class extends React.Component {
        state = {
            name: `name_${Date.now()}`,
            ...fn(this.props),
        };

        componentDidMount() {
            console.log('did mount:', this.state.name);
        }

        componentWillUnmount() {
            console.log('will unmount:', this.state.name);
        }

        render() {
            return (
                <Component {...this.state} {...this.props} />
            );
        }
    };
};

const Comp1 = wrapColor((props) => (
    <div>
        <h1 style={{color: props.color}}>My Name is: {props.name}</h1>
        <p>{props.desc}</p>
    </div>
), (props) => {
    return {
        desc: `desc_${props.color}`,
    };
});

export default () => (
    <div>
        <Comp1 color={`#${Math.floor(Math.random() * 255).toString(16)}${Math.floor(Math.random() * 255).toString(16)}${Math.floor(Math.random() * 255).toString(16)}`} />
        <Comp1 color={`#${Math.floor(Math.random() * 255).toString(16)}${Math.floor(Math.random() * 255).toString(16)}${Math.floor(Math.random() * 255).toString(16)}`} />
        <Comp1 color={`#${Math.floor(Math.random() * 255).toString(16)}${Math.floor(Math.random() * 255).toString(16)}${Math.floor(Math.random() * 255).toString(16)}`} />
    </div>
);
