import React from 'react';
import { connect } from 'react-redux'
import store from '../../app/store';
import ProductItem from './ProductItem';
import ProductEdit from './ProductEdit';
import {
    Button,
} from 'react-bootstrap';

import {
    add    as addProduct,
    remove as removeProduct,
    defaultProduct,
} from './reducer';
import {
    show as editProductShow,
} from '../common/modal/actions';
import {mockupProducts} from '../../app/config';

// generating products mockups
mockupProducts.map(product =>
    store.dispatch(addProduct({
        price:        product.price,
        name:         product.name,
        description:  product.description,
        creationDate: new Date(product.creationDate).toLocaleDateString(),
    }))
);

class ProductsList extends React.Component {
    state = {...defaultProduct, ...{
        // another state variables

    }};

    addProductForm = () => {
        this.setState({...this.state, ...defaultProduct});

        store.dispatch(editProductShow())
    };

    editProductForm = (product) => {
        this.setState(product);

        store.dispatch(editProductShow());
    };

    removeProduct = (productId) => {
        store.dispatch(removeProduct(productId));
    };

    render() {
        return (
            <div>
                <Button variant="success" onClick={this.addProductForm}>Add a product</Button>

                <div className='products-list'>
                    {
                        this.props.productsList.items.map(product => {
                            return <ProductItem
                                product={product}
                                key={product.id}
                                onEdit={this.editProductForm}
                                onRemove={this.removeProduct}
                            />
                        })
                    }
                </div>

                <ProductEdit
                    name={this.state.name}
                    description={this.state.description}
                    creationDate={this.state.creationDate}
                    price={this.state.price}
                    id={this.state.id}/>
            </div>
        );
    }
}

export default connect(
    null,
    null
)(ProductsList);
