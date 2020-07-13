import React from 'react';
import { Link } from 'react-router-dom';

export default class MenuItem extends React.PureComponent {
    render() {
        return (
            <Link to={this.props.menu.link} className='nav-link'>
                {this.props.menu.title}
            </Link>
        );
    }
}
