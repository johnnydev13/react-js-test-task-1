import React from 'react';
import routes from "../app/routes";

import {
    Switch,
    Route
} from "react-router-dom";

export default class MainSection extends React.Component {
    getBreadcrumbs = () => {

    };

    render() {
        return (
            <Switch>
                {routes.map(({ path, Component }, key) => (
                    <Route exact path={path} key={key} component={Component} />
                ))}
            </Switch>
        );
    }
}

