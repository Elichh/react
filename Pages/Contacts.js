import React, { Component } from 'react'
import { Form, Button, Container } from 'react-bootstrap'
export default class Contacts extends Component {
    render (){ 
        return(
      <Container style={{width: '500'}}>
          <h1 className="text-center">CONTACT ME</h1>
          <Form>
              <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email"/>
                  <Form.Text>
                      We'll never share your contacts with anyone else
                  </Form.Text>
              </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label> Example textarea</Form.Label>
                        <Form.Control as="textarea" rows="3"/>
                    </Form.Group>

                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" tye="submit">Submit</Button>
          </Form>
      </Container>
        )
    }
}