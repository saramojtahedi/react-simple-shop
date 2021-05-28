import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import Product from '../components/Product/Product'
import { productListAction } from '../redux/action/product'

const Home = () => {
    const dispatch = useDispatch()

    const productList = useSelector((state) => state.productList)
    const { loading , products } = productList

    useEffect(() => {
        dispatch(productListAction())
    } , [dispatch])

    return (
        <div>
            <h2 className="text-center mt-3 mb-5"> فروشگاه اینترنتی کالاهای دیجیتال </h2>
            {loading ? <h6 className="text-center pt-5 mt-5">... در حال دریافت محصولات  </h6> : <Row>
                {products.map((item) => {
                    return (
                    <Col key={item._id} sm={12} md={6} lg={4} >
                        <Product product={item} />
                    </Col>
                    )
                })}
            </Row>}
        </div>
    )
}

export default Home
