import React from 'react';
import ProductsContainer from "./products/ProductsContainer";
import ProductShowContainer from "./products/productsShow/ProductShowContainer";

import {
    Switch,
    Route
} from "react-router-dom";

export default class MainSection extends React.Component {

    render() {

        return (
            <Switch>
                <Route path='/products/:productId'>
                    <ProductShowContainer/>
                </Route>
                <Route path='/products'>
                    <ProductsContainer/>
                </Route>
            </Switch>
        );
    }
}

