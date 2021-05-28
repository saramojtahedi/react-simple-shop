import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Footer = () => {
    return (
        <footer className="bg-light pt-4 pb-2">
            <Container>
                <Row>
                    <Col className="text-center"> 
                        <p> مشاهده بقیه نمونه کارها : 
                            <a href="http://simamojtahedi.ir" target="_blank" rel="noreferrer" style={{color: "#404a85", fontWeight: "bold", textDecoration: "none"}}> سیما مجتهدی </a>
                        </p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer