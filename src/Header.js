import React, {useState} from 'react'
import { Container, Row, Col, Image,ListGroup, Tab,Nav } from 'react-bootstrap';
import './App.css';
import Avatar from "./assets/avatar.png"
import { AiOutlineDown } from "react-icons/ai";
import { FiLinkedin,FiGithub } from "react-icons/fi";
import { ImStackoverflow } from "react-icons/im";
import Info from './Info';
import Projects from './Projects';




function App() {
  const [arrowPos, setArrowPos] = useState(false)
  return (
    
    <div className="App  ">
        <Container className='main_container '>
          <Row>
            <Col sm ={12} md = {5} lg={4} xl={4} xxl={3}  className={arrowPos ? "" : 'mb-5'}  >
              <div className='prof borderLines  '>
                <Image src={Avatar} roundedCircle className='avatar m-2' />
                &nbsp;<span className='NameProf'>Denis Timofeev</span><br/>
                <span onClick={()=>setArrowPos(!arrowPos)} className='links'>Links<AiOutlineDown className={arrowPos ? "arrow" : "notarrow"}/></span>
              </div>
            
              {arrowPos ?
              <Row>
                <Col sm ={12} md = {12} lg={12} xl={12} xxl={12} className='mb-5'>
                  <ListGroup>
                    <a className='linkItem' href='URL'><ListGroup.Item ><FiLinkedin/> LinkedIn</ListGroup.Item></a>
                    <a className='linkItem' href='https://github.com/Artifs'><ListGroup.Item ><FiGithub/> GitHub</ListGroup.Item></a>
                    <a className='linkItem' href='https://stackoverflow.com/users/15447267/artifs'><ListGroup.Item ><ImStackoverflow/> StackOverflow</ListGroup.Item></a>
                </ListGroup>
                </Col>
              </Row>
                :
              <Row>
              </Row>
              }
             </Col>
              <Col> 
                    <Tab.Container   defaultActiveKey='first'>
                        <Col>
                        <Nav variant="pills" className=" navLinks">
                            <Nav.Item>
                            <Nav.Link eventKey="first"  style={{marginRight:'10px', padding:'.3rem 1.9rem', borderRadius:'20pt', cursor:'pointer'}}><span className='textNav'>Information</span></Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link eventKey="second"  style={{marginLeft:'10px', padding:'.3rem 1.9rem', borderRadius:'20pt', cursor:'pointer'}}> <span className='textNav'>Projects</span></Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey="first" >
                              <Info/>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second" >
                              <Projects/>
                            </Tab.Pane>
                           
                        </Tab.Content>
                        </Col>
                        </Tab.Container>
              </Col>
              
          </Row>
        </Container>
    </div>
  );
}

export default App;
