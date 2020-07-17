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

import './Custom.css';

// reactstrap components

import {
  FormGroup,
  Label,
  Button ,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Row, Col,
  FormText
} from "reactstrap";


class Fpassword extends React.Component {
  render() {
    return (
      <>
      <div className="custombg">
        <div className="content">
          <Row>
           <Col md="4"></Col>
            <Col md="4" className="newbg">
            <div className="logo2">
                <span></span>
              </div>
            <form>
             
      <FormGroup>
      <label>Please Enter Your E-mail</label>
        <InputGroup>
        
        <InputGroupAddon addonType="prepend">
          <InputGroupText><i className="far fa-envelope-open"></i></InputGroupText>
        </InputGroupAddon>
          <Input type="text" placeholder="Email address" />
      </InputGroup>
      </FormGroup>
     
      

      <Button color="info"  type="submit" className="custombtn Lsec"> 
        Submit <i className="fas fa-angle-right"></i>
      </Button>
    </form>
            </Col>
          </Row>
        </div>
        </div>
      </>
    );
  }
}

export default Fpassword;
