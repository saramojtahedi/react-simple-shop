import React, { useEffect } from 'react'
import { Col, ListGroup, Row , Button , Image, Card} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { addTocart, removeFromCart } from '../redux/action/cart'

const Cart = ({match}) => {

    const productId = match.params.id
    const dispatch = useDispatch()
    const cart = useSelector((state) => state.cart)
    const { cartItems } = cart

    useEffect(() => {
        if (productId) {
            dispatch(addTocart(productId))
        }
    }, [dispatch, productId])

    const removeItemHandler = (id) => {
        dispatch(removeFromCart(id))
    }

    const finalAlert = () => {
        alert(' سفارش شما با موفقیت ثبت شد ')
    }

    return (
        <div>
            <Row className="mt-3">
                <Col md={4}>
                    <Card className="p-3 py-4">
                        <div className="py-3">
                            <p className="text-center">
                            مجموع قیمت : {cartItems.reduce((acc, item) => acc + item.price, 0)} تومان
                            </p>
                        </div>
                        <Button type="button" className="btn-primary" onClick={finalAlert}> سفارش </Button>
                    </Card>
                </Col>
                <Col md={8} style={{border: " 1px solid rgba(0,0,0,0.03)"}}>
                    {cartItems.length === 0 ? <p className="text-center py-5"> ! سبد خرید خالی است </p> :
                        <ListGroup variant="flush">
                            <h6 className="text-center pt-4" dir="rtl"> سبد خرید : </h6>
                            {cartItems.map((item) => (
                                <ListGroup.Item key={item.product} dir="rtl">
                                    <Row className="">
                                        <Col md={2}>
                                            <Image src={item.image} alt={item.name} fluid rounded style={{border: '1px solid rgba(0,0,0,0.05)'}} />
                                        </Col>
                                        <Col md={4} className="d-flex align-items-center">
                                            {item.name} 
                                        </Col>
                                        <Col md={3} className="d-flex align-items-center">
                                            {item.price} تومان
                                        </Col>
                                        <Col md={3} className="d-flex align-items-center justify-content-end">
                                            <Button
                                                type="button"
                                                variant="light"
                                                onClick={()=> {removeItemHandler(item.product)}}
                                            >
                                                <i className="fa fa-trash"></i>
                                            </Button>
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                    }
                </Col>
            </Row>
        </div>
    )
}

export default Cart
