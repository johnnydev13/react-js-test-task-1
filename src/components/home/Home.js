import React from 'react';
import store from '../../app/store';
import { Link } from 'react-router-dom';
import {
    Jumbotron,
} from "react-bootstrap";

export default class Home extends React.Component {

    render() {
        return (
            <Jumbotron fluid={false} className="home">
                This is a home page, to start go to <Link to='/products'>products page</Link>
            </Jumbotron>
        );
    }
}


