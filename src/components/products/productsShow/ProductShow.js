import React from 'react';
import {
    withRouter
} from "react-router-dom";
import {
    defaultProduct,
} from '../reducer';
import {
    Alert,
    Badge,
    Jumbotron,
} from "react-bootstrap";

class ProductShow extends React.Component {
    state = {
        product: defaultProduct,
        isError: false,
    };
    componentDidMount() {
        const productId = parseInt(this.props.match.params.productId);

        console.log(this.props.productsList);
        console.log(productId);

        this.getProduct(productId);
    }

    getProduct = (productId) => {
        let product = this.props.productsList.items.filter(product => product.id === productId);

        if (product.length !== 1) {
            return this.setState({
                isError: true,
            });
        }

        this.setState({
            isError: false,
            product: product[0]
        });
    };

    showError = () => {
        if (!this.state.isError) {
            return false;
        }

        return (
            <Alert variant='danger'>
                A product hasn't found!
            </Alert>
        );
    };

    getCreationDate = () => {
        return new Date(this.state.product.creationDate).toLocaleDateString();
    };

    showProduct = () => {
        if (this.state.isError) {
            return false;
        }

        var product = this.state.product;
        return (
            <Jumbotron fluid={false} className="product-show">
                <h1>{product.name} <Badge variant="secondary">ID: {product.id}</Badge></h1>

                <p>{product.description}</p>

                <div className="price">${product.price}</div>

                <div className="creation-date">
                    <span className="title">Created:</span>
                    <span className="value">{this.getCreationDate()}</span>
                </div>
            </Jumbotron>
        )
    };

    render() {
        return (
            <div>
                {this.showError()}
                {this.showProduct()}
            </div>
        );
    }
}

export default withRouter(ProductShow);
