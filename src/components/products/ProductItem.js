import React from 'react';
import {
    Card,
    Button,
} from 'react-bootstrap';
import {Link} from 'react-router-dom';

export default class ProductsItem extends React.Component {
    render() {
        return (
            <Card className='product'>
                <Card.Body>
                    <Card.Title>
                        <Link to={"/products/" + this.props.product.id}>
                            [{this.props.product.id}] {this.props.product.name}
                        </Link>

                    </Card.Title>

                    <Card.Text>
                        {this.props.product.description}

                        <span className='creation-date'>{new Date(this.props.product.creationDate).toLocaleDateString()}</span>
                    </Card.Text>

                    <div className='control'>
                        <Card.Footer>
                            ${this.props.product.price}
                        </Card.Footer>
                        <Button variant="primary" onClick={() => {
                            this.props.onEdit(this.props.product)
                        }}>Edit</Button>
                        <Button variant="danger" onClick={() => {
                            this.props.onRemove(this.props.product.id)
                        }}>Remove</Button>
                    </div>
                </Card.Body>
            </Card>
        );
    }
}
