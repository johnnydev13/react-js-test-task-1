import React from 'react';
import MenuList from './menu/MenuList';

export default class Header extends React.PureComponent {
    render() {
        return (
            <header className="App-header">
                <h1>ReactJS - Intermediate - Test task 1</h1>

                <MenuList/>
            </header>
        )
    }
}
