import { Container, Row, Col} from 'react-bootstrap';
import SimpleMap from './map'

export default function Info() { 
    return(
        <Container className='main_container'>
            <Row>
                <Col >
                I am front’end developer from Russia, i live in Rostov Veliky and I work remotely.<br/>
                My main programming stack: <br/>
                -ReactJS <br/>
                -Redux<br/>
                -Bootstrap<br/>
                -html/css <br/>
                -PHP for back’end
                    
                </Col>
                <Col><SimpleMap/></Col>
            </Row>
        </Container>
    )
}