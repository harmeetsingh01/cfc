import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import {Link} from 'react-router-dom';


export default function Contact() {
    return (
        <div>
            <div>
                <Breadcrumb >
                    <BreadcrumbItem className="pl-5"><Link to="/">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Contact us</BreadcrumbItem>
                </Breadcrumb>
            </div>
            <div className="container">
                <div className="row pl-5">
                    <h3>Give Your Feedback</h3>
                </div>
                <hr></hr>
                <br></br>
                <div>
                <Form>
                    <FormGroup className="row">
                        <Label for="Name" className="col-12 col-md-2">Name</Label>
                        <Input type="text" className="col-12 col-md-4" name="Name" id="Name" placeholder="" />
                    </FormGroup>
                    <FormGroup className="row">
                        <Label className="col-12 col-md-2" for="Email">Email</Label>
                        <Input className="col-12 col-md-4" type="email" name="email" id="Email" placeholder="" />
                    </FormGroup>
                    <FormGroup className="row">
                        <Label className="col-12 col-md-2" for="mobileno">Mobile No</Label>
                        <Input className="col-12 col-md-4" type="number" name="mobileno" id="mobileno" placeholder="" />
                    </FormGroup>
                    
                    <FormGroup className="row">
                        <Label className="col-12 col-md-2" for="Address">Address</Label>
                        <Input className="col-12 col-md-4" type="text" name="address" id="Address" placeholder="1235 Main St"/>
                    </FormGroup>

                    <FormGroup className="row">
                        <Label className="col-12 col-md-2" for="info">Describe your situation</Label>
                        <Input className="col-12 col-md-4" type="textarea" name="info" id="info" placeholder="Situation"/>
                    </FormGroup>
                    <Col md={5}>
                    <Button left>Submit</Button>
                    </Col>
                    <br></br>
                    <br></br>
                </Form>
                </div>
            </div>
        </div>
    )
}
