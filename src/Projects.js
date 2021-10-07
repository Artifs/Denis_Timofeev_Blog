import { Container,Row,Col,Card,Nav} from 'react-bootstrap';
import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import { fetchProjects } from './asyncAction/projectsFetch';
import { LinkContainer } from "react-router-bootstrap";


export default function Projects() { 
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchProjects())
    }, []);
    
    const Projects = useSelector(state => state.projects.projects)
    return(
        <Container className='main_container'>
        <Row>
            {
                Projects.map(el => {
                    if(el != ''){
                    const a = el.split('^')
                    console.log(a)
                    return(
                    <Col className='mb-1 mt-1 colCard' sm ={12} md = {12} lg={12} xl={12} xxl={12}> 
                        <LinkContainer to={`/Project/${a[0]}`}>
                            <Nav.Link >
                                <Card >
                                    <Card.Body>
                                        <Card.Title className='HeaderCard'>{a[1]}<span className='cardDate'>{a[3]}</span></Card.Title>  
                                        <Card.Text><span className='ShortAbout'>{a[2]}</span></Card.Text>
                                    </Card.Body>
                            </Card> 
                            </Nav.Link>
                        </LinkContainer>
                    </Col>)
                }})   
            }

        </Row>
    </Container>
    )

}