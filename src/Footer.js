import React from 'react'
import { Container,Row,Col } from 'react-bootstrap';
import { withRouter} from 'react-router-dom';

function Footer() {
    return (
        <div className='footer'>
            <Container>
                <Row className='text-center mt-3' xs = {1} sm ={1} md = {3} lg={3} xl={3}>
                    <Col >
                        
                    </Col>
                </Row>
                <Row className='text-center' xs = {1} sm ={1} md = {3} lg={3} xl={3} >
                    <Col >
                    </Col>
                    <Col className='mt-3 mb-3'>
                    © Denis Timofeev <br/> 2021
                    </Col>
                    <Col>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}




export default withRouter(Footer);