import React, { Component } from 'react'
import {Container, Tab, Nav, Row, Col} from 'react-bootstrap'

import parkasImg from '../assets/parkas.jpg'
import parkas2Img from '../assets/parkas2.jpg'
import parkas3Img from '../assets/parkas3.jpg'
import shoesImg from '../assets/shoes.jpg'
import shoes2Img from '../assets/shoes2.jpg'
import shoes3Img from '../assets/shoes3.jpg'
import deimImg from '../assets/deim.jpg'
import deim2Img from '../assets/deim2.jpg'
import deim3Img from '../assets/deim3.jpg'
export default class About extends Component {
    render (){ 
        return(
        <Container>
            <Tab.Container id="let-tabs-example" defaultActiveKey="first">
                <Row>
                    <Col sm={4}>
                        <Nav variant="pills" className="flex-column mt-2">
                            <Nav.Item>
                                <Nav.Link eventKey="first">Coworking center</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Art studio</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">Chinese restaurant
</Nav.Link>
                            </Nav.Item>
                           
                        </Nav>
                    </Col>
                    <Col sm={8}>
                        <Tab.Content className="mt-3">
                            <Tab.Pane eventKey="first">
                                <img src={deimImg}/>
                                <img src={deim2Img}/>
                                <img src={deim3Img}/>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <img src={parkasImg}/>
                                <img src={parkas2Img}/>
                                <img src={parkas3Img}/>
                               
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                                <img src={shoesImg}/>
                                <img src={shoes2Img}/>
                                <img src={shoes3Img}/>
                            </Tab.Pane>
                           
                        </Tab.Content>
                    </Col>
                </Row>

            </Tab.Container>
            </Container>
        )
    }
}