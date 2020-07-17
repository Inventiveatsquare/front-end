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
  Navbar, Conatiner, NavbarBrand, NavbarToggler, Collapse, Nav, NavItme, NavLink,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Label,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
} from "reactstrap";
import PerfectScrollbar from "perfect-scrollbar";
import DemoNavbar from "components/Navbars/DemoNavbar";



  var ps;

  class Cprofile extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        backgroundColor: "black",
        activeColor: "info",
      };
      this.mainPanel = React.createRef();
    }
   


  render() {
    return (
      <>
      <Row>
       
        <Navbar expand="lg" color={'primary'} className="headbg" light fixed={'top'}>
        <Col md="2"></Col>
        <Col md="4">
        <NavbarBrand><div className="logo1"><span></span></div> </NavbarBrand>
        </Col>
        <Col md="4">
          <div className="cprofile-text"><h3>Complete the Application</h3></div>   
        </Col>
        <Col md="2"></Col>
        </Navbar>
        
      </Row>
        
        <div className="content cprofile">
          <Row>
          <Col md="2"></Col>
            <Col md="8">
              <Card className="card-user">
                <CardHeader>
                  <CardTitle tag="h5">Lender Basic Information </CardTitle>
                </CardHeader>

               

                <CardBody>
                  <Form>

                  <Row>
                      <Col className="pr-1" md="5">
                        <FormGroup>
                          <label>Application Code </label>
                          <Input
                            defaultValue="34565"
                            disabled
                            placeholder="34566565"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="px-1" md="3">
                        <FormGroup>
                          <label>Lender Username</label>
                          <Input
                          disabled
                            defaultValue="Mike Simon"
                            placeholder="Mike Simon"
                            type="text"
                          />
                        </FormGroup>
                      </Col>

                       <Col className="pl-1" md="4">
                        <FormGroup>
                          <label htmlFor="exampleInputEmail1">
                          Lender Code
                          </label>
                          <Input placeholder="23456"  disabled type="text" />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-1" md="6">
                        <FormGroup>
                          <label>First Name</label>
                          <Input
                          disabled
                            defaultValue="Mike"
                            placeholder="Mike"
                            type="text"
                            disabled
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pl-1" md="6">
                        <FormGroup>
                          <label>Last Name</label>
                          <Input
                            defaultValue="Simon"
                            placeholder="Simon"
                            type="text"
                            disabled
                          />
                        </FormGroup>
                      </Col>
                    </Row>


                    <Row>
                    <Col md="12">
                
                  <CardTitle tag="h5">Basic Information </CardTitle>
               
                    </Col>
                      <Col className="pr-1" md="5">
                        <FormGroup>
                          <label>Phone Number  </label>
                          
                          <Input
                            defaultValue="+1 9898989898"
                            disabled
                            placeholder="34566565"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="px-1" md="3">
                        <FormGroup>
                          <label>First Name</label>
                          <Input
                          disabled
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
                          disabled
                            defaultValue="Snow"
                            placeholder="Customer Last Name"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-1" md="4">
                        <FormGroup>
                          <label>Your - Email </label>
                          <Input
                            defaultValue="Your e-mail"
                            placeholder="E-mail"
                            type="email"
                          />
                        </FormGroup>
                      </Col>
                      <Col className="pl-1" md="4">
                        <FormGroup>
                          <label>Password</label>
                          <Input
                            defaultValue="12345"
                            placeholder="Password"
                            type="password"
                          />
                        </FormGroup>
                      </Col>

                      <Col className="pl-1" md="4">
                        <FormGroup>
                          <label>Confirm Password</label>
                          <Input
                            defaultValue="12345"
                            placeholder="Confirm Password"
                            type="password"
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
                        <CardHeader>
                          <CardTitle tag="h5">How would you like to pay?</CardTitle> 
                        </CardHeader>
                    
                      <Col md="12">
                        <FormGroup>
                          <label>Loan Amount</label>
                          <Input
                           disabled
                            defaultValue="1000 "
                            placeholder="1000"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>

                    <Row>
                      <Col md="6">
                        <FormGroup>
                          <label>Monthly Payment</label>
                          <Input defaultValue="50 "  placeholder="50"  type="text"/>
                        </FormGroup>
                      </Col>

                      <Col md="5">
                        <FormGroup>
                          <label>Number of Payments</label>
                          <Input defaultValue="40 "  placeholder="40"  type="text"/>
                        </FormGroup>
                      </Col>

                      <Col md="1">
                      <FormGroup check>
                      
        <Label check>
          <Input type="checkbox" />{' '}
          
          <span className="form-check-sign">
            <span className="check"></span>
        </span>
        </Label>
      </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                    <p className="text-success spaces">
                      Reduce Rate 4.60% for 60 Months
                    </p>
                    </Row>

                    <Row>
                      <Col md="6">
                        <FormGroup>
                          <label>Monthly Payment</label>
                          <Input defaultValue="50 "  placeholder="50"  type="text"/>
                        </FormGroup>
                      </Col>

                      <Col md="5">
                        <FormGroup>
                          <label>Number of Payments</label>
                          <Input defaultValue="40 "  placeholder="40"  type="text"/>
                        </FormGroup>
                      </Col>

                      <Col md="1">
                      <FormGroup check>
                      
        <Label check>
          <Input type="checkbox" />{' '}
          
          <span className="form-check-sign">
            <span className="check"></span>
        </span>
        </Label>
      </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                    <p className="text-success spaces">
                      Reduce Rate 4.60% for 60 Months
                    </p>
                    </Row>
                    <Row>
                      <Col md="6">
                        <FormGroup>
                          <label>Monthly Payment</label>
                          <Input defaultValue="50 "  placeholder="50"  type="text"/>
                        </FormGroup>
                      </Col>

                      <Col md="5">
                        <FormGroup>
                          <label>Number of Payments</label>
                          <Input defaultValue="40 "  placeholder="40"  type="text"/>
                        </FormGroup>
                      </Col>

                      <Col md="1">
                      <FormGroup check>
                      
        <Label check>
          <Input type="checkbox" />{' '}
          
          <span className="form-check-sign">
            <span className="check"></span>
        </span>
        </Label>
      </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                    <p className="text-success spaces">
                      Reduce Rate 4.60% for 60 Months
                    </p>
                    </Row>
                    <Row>
                      <div className="update ml-right mr-right cbtnn">
                      <Button color="info"  type="submit" className="custombtn1">
                        Submit Application
           
                        </Button>
                      </div>
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



export default Cprofile;
