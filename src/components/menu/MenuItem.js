import React from 'react';
import { Link } from 'react-router-dom';
import {
    Navbar,
} from 'react-bootstrap';

export default class MenuItem extends React.PureComponent {
    render() {
        return (
            <Link to={this.props.menu.link} className='nav-link'>
                {this.props.menu.title}
            </Link>
        );
    }
}
