import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function ProductCard({ product }) {
    return (
        <>
            <div className='col-md-4'>
                <Card>
                    <Card.Img variant="top" src={ product.thumbnail } />
                    <Card.Body className='text-center'>
                        <Card.Title>{ product.title }</Card.Title>
                        <Card.Text>
                            {product.description}
                        </Card.Text>
                        <Button variant="primary">Rs.{product.price}</Button>
                    </Card.Body>
                </Card>
            </div>
        </>
    )
}
