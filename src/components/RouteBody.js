import React from 'react';
import {Route} from 'react-router-dom';

export default class RouteBody extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Route
                path={this.props.routeElem.path}
                render={props => (
                    <Route.component {...props} routes={this.props.routeElem.routes} />
                )}
            />
        );
    }
}

