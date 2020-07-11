import React from 'react';
import ProductsContainer from "./products/ProductsContainer";

import {
    Switch,
    Route
} from "react-router-dom";

export default class MainSection extends React.Component {
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

