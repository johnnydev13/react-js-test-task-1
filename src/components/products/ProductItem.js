import React from 'react';
import {
    Card,
    Button,
} from 'react-bootstrap';

export default class ProductsList extends React.Component {
    render() {
        return (
            <Card className='product'>
                <Card.Body>
                    <Card.Title>
                        {this.props.product.name}
                    </Card.Title>

                    <Card.Text>
                        {this.props.product.description}

                        <span className='creation-date'>{this.props.product.creationDate}</span>
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
