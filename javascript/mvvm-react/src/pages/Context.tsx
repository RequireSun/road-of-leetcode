import React, { Fragment } from 'react';

declare interface ICarInfo {
    name: string;
    price: number;
}

const MyContext = React.createContext<{
    cars: { [key: string]: ICarInfo };
    incrementPrice: (selectedID: string) => void;
    decrementPrice: (selectedID: string) => void;
}>({
    cars: {},
    incrementPrice: (selectedID: string) => {},
    decrementPrice: (selectedID: string) => {},
});

class MyProvider extends React.Component {
    state: { cars: { [key: string]: ICarInfo } } = {
        cars: {
            car001: { name: 'Honda', price: 100 },
            car002: { name: 'BMW', price: 150 },
            car003: { name: 'Mercedes', price: 200 },
        },
    };

    incrementPrice = (selectedID: string) => {
        const cars = Object.assign({}, this.state.cars);
        cars[selectedID].price = cars[selectedID].price + 1;

        this.setState({
          cars,
        });
    };

    decrementPrice = (selectedID: string) => {
        const cars = Object.assign({}, this.state.cars);
        cars[selectedID].price = cars[selectedID].price - 1;

        this.setState({
            cars,
        });
    };

    render() {
        return (
            <MyContext.Provider value={{
                cars: this.state.cars,
                incrementPrice: this.incrementPrice,
                decrementPrice: this.decrementPrice,
            }}>
                {this.props.children}
            </MyContext.Provider>
        );
    }
}

const Car = (props: ICarInfo & { incrementPrice: () => void; decrementPrice: () => void; }) => (
    <Fragment>
        <p>Name: {props.name}</p>
        <p>Price: ${props.price}</p>
        <button onClick={props.incrementPrice}>&uarr;</button>
        <button onClick={props.decrementPrice}>&darr;</button>
    </Fragment>
);

const Cars = () => (
    <MyContext.Consumer>
        {context => (
            <Fragment>
                <h4>Cars:</h4>
                {Object.keys(context.cars).map((carId: string) => (
                    <Car key={carId}
                         name={context.cars[carId].name}
                         price={context.cars[carId].price}
                         incrementPrice={() => context.incrementPrice(carId)}
                         decrementPrice={() => context.decrementPrice(carId)} />
                ))}
            </Fragment>
        )}
    </MyContext.Consumer>
);

const ProductList = () => (
    <div className="product-list">
        <h2>Product list:</h2>
        <Cars />
    </div>
);

export default () => {
    return (
        <MyProvider>
            <h1>Context</h1>
            <ProductList/>
        </MyProvider>
    );
};
