import { Container, Row, Col, Image,ListGroup, Tab,Nav } from 'react-bootstrap';
import React,{useEffect,useState}from 'react'
import { LinkContainer } from "react-router-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import { fetchProjects } from './asyncAction/projectsFetch';
import { useHistory } from "react-router-dom";



export default function Project(props) {
    const history = useHistory();
    const id = props.match.params.id;

    let p = 0
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchProjects())
    }, []);
    
    const Projects = useSelector(state => state.projects.projects)
    
    Projects.find((e) => {
        const a = e.split('^')
        a.find((el) => {
            if (el == id){
                p = e
                return
            }
    })})
    console.log(id)
    if(p != 0){
    const b = p.split('^')
    console.log(b)
    return (
        <div className="App  ">
            <Container className='main_container '>
                <Row>
                    <Col >
                        <LinkContainer to={`/`}>
                        <button className='GoBackButt'>Go back</button>
                        </LinkContainer>
                        <h1 className='headProj'>Project {b[1]}<span className='headDate' ><br/>Date: {b[3]}</span></h1>
                    </Col>
                </Row>
                <Row>
                    <Col className='DescriptionProj'>
                        <span className='TextDiscription'>{b[4]}<br/>
                        <a href={b[6]}>{b[6]}</a><br/>
                        <a href={b[5]}>Project in GIT</a><br/>
                        <span>{b[7]}</span></span>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
else{
    history.push('/')
    return (<div></div>)
}}
