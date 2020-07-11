import React from 'react';
import store from '../../app/store';
import {
    hide as addProductHide,
} from '../common/modal/actions';
import {
    Modal,
    Button,
    InputGroup,
    FormControl,
    Alert,
} from 'react-bootstrap';
import {
    add as addProduct, defaultProduct,
    edit as ediProduct,
} from "./reducer";
import { getToday } from "../../app/funcs/date";

export default class ProductEdit extends React.Component {
    state = {
        id:           0,
        name:         this.props.name,
        creationDate: getToday(),
        description:  '',
        price:        0,
        updated:      false,
    };

    static getDerivedStateFromProps(props, state) {
        if (props.id !== state.id) {
            return props;
        }

        return state;
    }

    closeForm = () => {
        store.dispatch(addProductHide());
    };

    handleNameChange = event => {
        this.setState({
            name: event.target.value,
        });
    };

    handleDescriptionChange = event => {
        this.setState({
            description: event.target.value
        });
    };

    handlePriceChange = event => {
        let price = parseInt(event.target.value);

        if (isNaN(price)) {
            price = 0;
        }

        this.setState({
            price: price
        })
    };

    saveProduct = () => {
        // TODO use some library for validation?
        if (this.state.name.length === 0 || !this.state.description === 0 || this.state.price === 0) {
            return this.setError(true);
        }

        this.setError(false);

        if (this.state.id === 0) {
            this.addProduct();
        } else {
            this.editProduct();
        }

        this.setState(defaultProduct);
    };

    addProduct = () => {
        store.dispatch(addProduct({
            price:        this.state.price,
            name:         this.state.name,
            description:  this.state.description,
            creationDate: this.state.creationDate,
        }));
    };

    editProduct = () => {
        store.dispatch(ediProduct({
            id:           this.state.id,
            price:        this.state.price,
            name:         this.state.name,
            description:  this.state.description,
            creationDate: this.state.creationDate,
        }));
    };

    setError(isError){
        this.setState({
            isError: isError
        });
    }

    showError = () => {
        if (!this.state.isError) {
            return false;
        }

        return (
            <Alert variant='danger'>
                Please, check your input data
            </Alert>
        )
    };

    render() {
        if (!store.getState().modal.isVisible) {
            return false;
        }

        return (
            <div className='modal-container'>
                <Modal.Dialog className='modal'>
                    <Modal.Header closeButton onHide={this.closeForm}>
                        <Modal.Title>{this.state.id === 0 ? 'Add' : 'Edit'} a product</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <label htmlFor="add-product-name">Product name</label>
                        <InputGroup className="mb-3">
                            <FormControl
                                id="add-product-name"
                                placeholder="Name of your product"
                                aria-label="Name of your product"
                                aria-describedby="basic-addon1"
                                onChange={this.handleNameChange}
                                value={this.state.name}
                            />
                        </InputGroup>

                        <label htmlFor="add-product-description">Product description</label>
                        <InputGroup  className="mb-3">
                            <FormControl
                                id="add-product-description"
                                as="textarea"
                                aria-label="Description"
                                placeholder="Description..."
                                onChange={this.handleDescriptionChange}
                                value={this.state.description}/>
                        </InputGroup>

                        <label htmlFor="add-product-price">Price</label>
                        <InputGroup className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text>$</InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                aria-label="Amount"
                                id="add-product-price"
                                placeholder="0.0"
                                onChange={this.handlePriceChange}
                                value={this.state.price}
                            />
                        </InputGroup>

                        <label htmlFor="add-product-date">Creation Date</label>
                        <InputGroup className="mb-3">
                            <FormControl
                                readOnly="readonly"
                                aria-label="Creation Date"
                                id="add-product-date"
                                value={this.state.creationDate}/>
                        </InputGroup>

                        {this.showError()}
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.closeForm}>Cancel</Button>
                        <Button variant={this.state.id === 0 ? 'success' : 'primary'} onClick={this.saveProduct}>{this.state.id === 0 ? 'Add' : 'Update'}</Button>
                    </Modal.Footer>
                </Modal.Dialog>
            </div>
        );
    }
}
