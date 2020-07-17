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
import axios from "axios";
import './Custom.css';

// reactstrap components
import { Link } from "react-router-dom";
import {
  FormGroup,
  Label,
  Button ,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Row, Col,
  FormText,
  NavLink
} from "reactstrap";


class Login extends React.Component {

  constructor() {
    super()
    this.state = {
      email: '',
      password: '',
      errors: {}
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }
  onSubmit(e) {
    e.preventDefault()

    const user = {
      email: this.state.email,
      password: this.state.password
    }

    axios.post('http://localhost:3001/users/login', {
      email: user.email,
      password: user.password
    })
    .then(response => {
      localStorage.setItem('usertoken', response.data)
      return response.data
    })
    .catch(err => {
      console.log(err)
    })


    .then(res => {
     
        this.props.history.push(`/payflex/admin/dashboard`)
  
    })

  }
  render() {

    
    return (
      <>
 
        <div className="content">
          <Row>
           <Col md="4"></Col>
            <Col md="4" className="newbg">
            <div className="logo2">
                <span></span>
              </div>
            <form onSubmit={this.onSubmit}>
           
        
      <FormGroup>
      
        <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText><i className="far fa-envelope-open"></i></InputGroupText>
        </InputGroupAddon>
        <Input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Enter email"
                  value={this.state.email}
                  onChange={this.onChange}
                />
      </InputGroup>
      </FormGroup>
     
      <FormGroup>
       
        <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText><i className="fas fa-unlock-alt"></i></InputGroupText>
        </InputGroupAddon>
          <Input   type="password"
                  className="form-control"
                  name="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.onChange} />
      </InputGroup>
      </FormGroup>
      
      <span><Link to="/payflex/newuser/forgot-password" className="fpass" >Forgot Password?</Link> </span>
      <Button
                type="submit"
                color="primary" className="custombtn Lsec"  round 
              >
               Login<i className="fas fa-angle-right"></i>
              </Button>



<Link  to="/payflex/newuser/register" color="primary" className="custombtn Lsec"  round >
      New User <i className="fas fa-angle-right"></i>
</Link>

    </form>
            </Col>
          </Row>
        </div>
       
      </>
    );
  }
}

export default Login;
