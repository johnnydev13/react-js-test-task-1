import React from 'react';
import {Link} from 'react-router-dom';

export default class MenuItem extends React.PureComponent {
    render() {
        return (
            <Link to="/products">
                - products
            </Link>
        );
    }
}
