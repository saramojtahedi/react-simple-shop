import React, { useEffect } from 'react'
import { Col, Image, ListGroup, Row, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { productDetailAction } from '../redux/action/product'

const Product = ({history, match}) => {

    const dispatch = useDispatch()
    const productDetail = useSelector((state) => state.productDetail)
    const { loading , product } = productDetail

    useEffect(() => {
        dispatch(productDetailAction(match.params.id))
    } , [dispatch, match])

    const addToCartHandler = () => {
        history.push(`/cart/${match.params.id}`)
    }

    return (
        <div>
            {loading 
                ? <h6 className="text-center pt-5 mt-5"> ... در حال دریافت محصول </h6> 
                : <Row className="pt-4">
                    <Col md={8}>
                        <ListGroup variant="flush">
                            <ListGroup.Item className="text-right">
                                <h4>{product.name}</h4>
                            </ListGroup.Item>
                            <ListGroup.Item className="text-right">
                                <p dir="rtl" style={{lineHeight: '1.9'}}>{product.description}</p>
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                    <Col md={{ span: 4 }}>
                        <Image src={product.image} fluid className="p-2" style={{border:" 1px solid #e6e6e6"}} />
                        <h6 className="py-3 text-center"> قیمت : <strong> {product.price} تومان </strong></h6>
                        <Col md={{ span: 10, offset: 1 }}>
                            <Button classname="btn" type="button" onClick={addToCartHandler} style={{width: "95%", margin:"auto"}}> افزودن به سبد خرید </Button>
                        </Col>
                    </Col>
                </Row>
            }    
        </div>
    )
}

export default Product
