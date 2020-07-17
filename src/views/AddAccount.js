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
import AddForm from './AddForm';
// reactstrap components
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col,
} from "reactstrap";
// core components

class AddAccount extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Row>
              <Col md-6>
                  <AddForm/>
              </Col>
              <Col md-6>
                  1
              </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default AddAccount;
