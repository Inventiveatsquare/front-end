/*!

=========================================================
* Paper Dashboard React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
} from "reactstrap";

class User extends React.Component {

  constructor(props) {
    super(props);
    this.state = { disabled: true }
  }
  handleGameClik() {
    this.setState( {disabled: !this.state.disabled} )
  } 


  render() {
    return (
      <>
        <div className="content">
      
       
          <Row>
            
            <Col md="12">
              <Card className="card-user">
               
                <CardBody>
                <Form>




  <Row>
  <Col md="12">

<CardTitle tag="h5">Basic Information </CardTitle>

  </Col>
    <Col className="pr-1" md="5">
      <FormGroup>
        <label>Phone Number  </label>
        
        <Input
          defaultValue="+1 9898989898"
        disabled = {(this.state.disabled)? "disabled" : ""}
          placeholder="34566565"
          type="text"
        />
      </FormGroup>
    </Col>
    <Col className="px-1" md="3">
      <FormGroup>
        <label>First Name</label>
        <Input
        disabled = {(this.state.disabled)? "disabled" : ""}
          defaultValue="Jone"
          placeholder="Customer First Name"
          type="text"
        />
      </FormGroup>
    </Col>

     <Col className="pl-1" md="4">
      <FormGroup>
        <label htmlFor="exampleInputEmail1">
          Last Name
        </label>
        <Input
         disabled = {(this.state.disabled)? "disabled" : ""}
          defaultValue="Snow"
          placeholder="Customer Last Name"
          type="text"
        />
      </FormGroup>
    </Col>
  </Row>
  <Row>
    <Col className="pr-1" md="6">
      <FormGroup>
        <label>Your - Email </label>
        <Input
          defaultValue="Johnsnow@gmail.com"
          placeholder="E-mail"
          type="email"
          disabled = {(this.state.disabled)? "disabled" : ""}
        />
      </FormGroup>
    </Col>
    <Col className="pl-1" md="6">
      <FormGroup>
        <label>Password</label>
        <Input
          defaultValue="12345"
          placeholder="Password"
          type="password"
          disabled = {(this.state.disabled)? "disabled" : ""}
        />
      </FormGroup>
    </Col>


  </Row>
  <Row>
      <CardHeader>
        <CardTitle tag="h5">Address Information </CardTitle> 
      </CardHeader>
  
    <Col md="12">
      <FormGroup>
        <label>Address</label>
        <Input
          defaultValue="Address Line "
          placeholder="Address Line"
          type="text"
          disabled = {(this.state.disabled)? "disabled" : ""}
        />
      </FormGroup>
    </Col>
  </Row>

  <Row>
    <Col md="12">
      <FormGroup>
      <label>Address (Optional)</label>
        <Input
          defaultValue="Address Line "
          placeholder="Address Line"
          type="text"
          disabled = {(this.state.disabled)? "disabled" : ""}
        />
      </FormGroup>
    </Col>
  </Row>

 
  <Row>
    <Col className="pr-1" md="6">
      <FormGroup>
        <label>Locality</label>
        <Input
          defaultValue="any"
          placeholder="Locality"
          type="text"
          disabled = {(this.state.disabled)? "disabled" : ""}
        />
      </FormGroup>
    </Col>

    <Col className="pl-1" md="6">
      <FormGroup>
        <label>Province</label>
        <Input
          defaultValue="NY"
          placeholder="Province"
          type="text"
          disabled = {(this.state.disabled)? "disabled" : ""}
        />
      </FormGroup>
    </Col>
    </Row>

    <Row>
    <Col className="pr-1" md="6">
      <FormGroup>
        <label>Country</label>
        <Input
          defaultValue="USA"
          placeholder="Country"
          type="text"
          disabled = {(this.state.disabled)? "disabled" : ""}
        />
      </FormGroup>
    </Col>
    <Col className="pl-1" md="6">
      <FormGroup>
        <label>Postal Code</label>
        <Input placeholder="ZIP Code" type="number" />
      </FormGroup>
    </Col>
  </Row>


  
  <Row>
    <Col md="6">
    <Button  onClick = {this.handleGameClik.bind(this)}> Edit Profile  </Button>

    </Col>

    <Col md="6">
    <Button color="info"  type="submit" className="custombtn1">
      Submit Application

      </Button>

    </Col>
    
  </Row>
</Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default User;
