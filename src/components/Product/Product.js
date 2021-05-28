import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Product.css'

const Product = ({product}) => {
    return (
        <>
            <Card className="my-3 p-3 rounded">
                <Link to={`/product/${product._id}`} style={{ borderBottom: '1px solid rgba(0,0,0,0.09)' }}>
                    <Card.Img src={product.image} variant="top" />
                </Link>
                <Card.Body>
                    <Link to={`/product/${product._id}`} className="text-center item-name">
                    <Card.Title as="div">{product.name}</Card.Title>
                    </Link>
                </Card.Body>
                <Card.Text as="h6" className="text-right" dir="rtl">قیمت : <strong className="mr-2">{product.price} تومان </strong></Card.Text>
            </Card>
        </>
    )
}

export default Product
