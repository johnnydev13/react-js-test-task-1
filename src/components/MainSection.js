import React from 'react';
import ProductsContainer from "./products/ProductsContainer";
import ProductsList from './products/ProductsList'
import {
    Switch,
    Route
} from "react-router-dom";

export default class MainSection extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Switch>
                <Route path="/products">
                    <ProductsContainer/>
                </Route>
            </Switch>
        );
    }
}

