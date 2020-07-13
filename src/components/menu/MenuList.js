import React from 'react';
import MenuItem from './MenuItem';
import {
    Navbar,
    Nav,
} from 'react-bootstrap';
import { menu } from '../../app/config';

export default class MenuList extends React.PureComponent {
    render() {
        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/">Test task 1</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    {menu.map((item, index) => (
                        <MenuItem key={index} menu={item}/>
                    ))}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}
