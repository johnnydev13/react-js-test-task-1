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
    add  as addProduct,
    edit as ediProduct,
} from './reducer';
import { getToday } from '../../app/funcs/date';
import errors from '../../app/errors';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default class ProductEdit extends React.Component {
    state = {
        key:          0,
        id:           0,
        name:         '',
        creationDate: getToday(),
        description:  '',
        price:        0,
        isError:      false,
        errorText:    errors.products.editDefault,
        isEdit:       false,
    };

    componentDidMount() {
        document.addEventListener("keydown", this.escFunction, false);
    }

    escFunction = (event) => {
        if(event.keyCode === 27) {
            if (store.getState().modal.isVisible) {
                this.closeForm();
            }
        }
    };

    static getDerivedStateFromProps(props, state) {
        if (props.id !== state.key) {
            let newState = Object.assign({}, props);

            newState = {...state, ...newState};
            newState.key = props.id;

            return newState;
        }

        return null;
    }

    closeForm = () => {
        store.dispatch(addProductHide());
    };

    handleModalKeyDown = (event) => {
        console.log(event.key)
    };

    handleModalClick = (event) => {
        if (event.target.className !== 'modal-container') {
            return false;
        }

        this.closeForm();
    };

    handleIdChange = event => {
        let id = parseFloat(event.target.value);

        if (isNaN(id)) {
            id = 0;
        }

        this.setState({
            id: id,
        });
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

    handleDateChange = date => {
        this.setState({
            creationDate: date
        });
    };

    handlePriceChange = event => {
        let price = parseFloat(event.target.value);

        if (isNaN(price)) {
            price = 0;
        }

        this.setState({
            price: price
        })
    };

    saveProduct = () => {
        if (this.state.id <= 0) {
            return this.setError(true, errors.products.badId);
        }
        let exists = store.getState().products.items.filter(product =>
            product.id === this.state.id
        );

        if (exists.length > 0) {
            // Checking if editing a product without changing an ID
            if (this.state.key !== exists[0].id) {
                return this.setError(true, errors.products.idExists);
            }
        }
        // TODO use some library for validation?
        if (this.state.name.length === 0 || !this.state.description === 0 || this.state.price === 0) {
            return this.setError(true, errors.products.editDefault);
        }

        if (this.state.isEdit) {
            this.editProduct();
        } else {
            this.addProduct();
        }

        this.setError(false);

        //this.setState(defaultProduct);
    };

    addProduct = () => {
        store.dispatch(addProduct({
            id:           this.state.id,
            price:        this.state.price,
            name:         this.state.name,
            description:  this.state.description,
            creationDate: this.state.creationDate.toString(),
        }));
    };

    editProduct = () => {
        store.dispatch(ediProduct({
            id:           this.state.id,
            price:        this.state.price,
            name:         this.state.name,
            description:  this.state.description,
            creationDate: this.state.creationDate.toString(),
            prevId:       this.state.key,
        }));
    };

    setError(isError, text){
        this.setState({
            isError:   isError,
            errorText: text,
        });
    }

    showError = () => {
        if (!this.state.isError) {
            return false;
        }

        return (
            <Alert variant='danger'>
                {this.state.errorText}
            </Alert>
        )
    };

    setGeneratedId = () => {
        this.setState({
            id: this.props.nextId
        })
    };

    render() {
        if (!store.getState().modal.isVisible) {
            return false;
        }

        return (
            <div className='modal-container' onMouseDown={this.handleModalClick}>
                <Modal.Dialog className='modal'>
                    <Modal.Header closeButton onHide={this.closeForm}>
                        <Modal.Title>
                            {!this.state.isEdit ? 'Add' : 'Edit'} a product
                        </Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <label htmlFor="add-product-id">Product ID {!this.state.isEdit ? <small onClick={this.setGeneratedId} className='dashed-link'>set next generated ID</small> : false}</label>
                        <InputGroup className="mb-3">
                            <FormControl
                                id="add-product-id"
                                placeholder="[0-9]+"
                                aria-label="Name of your product"
                                aria-describedby="basic-addon1"
                                onChange={this.handleIdChange}
                                value={this.state.id}
                                type="number"
                            />
                        </InputGroup>
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
                            <DatePicker
                                id="add-product-date"
                                className="form-control"
                                selected={new Date(this.state.creationDate)}
                                onChange={this.handleDateChange}
                            />
                        </InputGroup>

                        {this.showError()}
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.closeForm}>Cancel</Button>
                        <Button variant={!this.state.isEdit ? 'success' : 'primary'} onClick={this.saveProduct}>{!this.state.isEdit ? 'Add' : 'Update'}</Button>
                    </Modal.Footer>
                </Modal.Dialog>
            </div>
        );
    }
}
