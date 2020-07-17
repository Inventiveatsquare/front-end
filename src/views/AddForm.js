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


class AddForm extends React.Component {

    constructor() {
        super()
        this.state = {
          first_name: '',
          last_name: '',
          email: '',
          phone:'',
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
    
        const newUser = {
          first_name: this.state.first_name,
          phone: this.state.phone,
          email: this.state.email,
          email: this.state.email,
          password: this.state.password
        }
        
        
        console.log(newUser)


        axios.post('http://localhost:3001/users/reg', {
            first_name: newUser.first_name,
            last_name: newUser.last_name,
            email: newUser.email,
            phone: newUser.phone,
            password: newUser.password
          })
          .then(function (response) {
            console.log(response);
          }).then(res => {
            this.props.history.push(`/payflex/newuser/login`)
          })
    
    }

  render() {
    return (
     
 
     
         
           
            <form onSubmit={this.onSubmit}> 

    
      
      <FormGroup>
      <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText><i className="far fa-envelope-open"></i></InputGroupText>
        </InputGroupAddon>
          <Input 
          type="text" 
          name="first_name"
          placeholder="First Name"
          value={this.state.first_name}
          onChange={this.onChange}
          />
      </InputGroup>
      </FormGroup>

      <FormGroup>
      <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText><i className="far fa-envelope-open"></i></InputGroupText>
        </InputGroupAddon>
          <Input 
          type="text" 
          placeholder="Last Name"
          name="last_name"
          value={this.state.last_name}
          onChange={this.onChange}
           />
      </InputGroup>
      </FormGroup>

      
      <FormGroup>
      <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>+91</InputGroupText>
        </InputGroupAddon>
        <Input 
          type="number" 
          placeholder="Phone Number"
          name="phone"
          value={this.state.phone}
          onChange={this.onChange}
           />
      </InputGroup>
      </FormGroup>

      <FormGroup>
      <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText><i className="far fa-envelope-open"></i></InputGroupText>
        </InputGroupAddon>
          <Input 
          type="text" 
          placeholder="Email address"
          name="email"
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
          <Input 
          type="text" 
          name="password"
          placeholder="Password"
          value={this.state.password}
          onChange={this.onChange}
          />
      </InputGroup>
      </FormGroup>
      
     

      <Button type="submit" color="primary" className="custombtn Lsec"  round >
      Add New Merchant <i className="fas fa-angle-right"></i>
</Button>
    </form>
   
       
     
    );
  }
}

export default AddForm;
