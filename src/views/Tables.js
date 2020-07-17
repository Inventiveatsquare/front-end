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
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Button,
  Table,
  Row,
  Col,
} from "reactstrap";

class Tables extends React.Component {
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md="12">
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Active Applications Data</CardTitle>
                </CardHeader>
                <CardBody>
                  <Table responsive>
                    <thead className="text-primary">
                      <tr>
                        <th>Application code</th>
                        <th>Lender Code</th>
                        <th>Lender Name</th>
                        <th>Loan Amount</th>
                        <th>Paid EMI</th>
                        <th>Pending EMI</th>
                        <th className="text-right">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>123400</td>
                        <td>65432</td>
                        <td>Mike Simon</td>
                        <td>$4567</td>
                        <td>3</td>
                        <td>6</td>
                        <td className="text-right"><Button color="default">Pay Now</Button></td>
                      </tr>
                      <tr>
                        <td>123400</td>
                        <td>65432</td>
                        <td>Mike Simon</td>
                        <td>$4567</td>
                        <td>3</td>
                        <td>6</td>
                        <td className="text-right"><Button color="default">Pay Now</Button></td>
                      </tr>
                      <tr>
                        <td>123400</td>
                        <td>65432</td>
                        <td>Mike Simon</td>
                        <td>$4567</td>
                        <td>3</td>
                        <td>6</td>
                        <td className="text-right"><Button color="default">Pay Now</Button></td>
                      </tr>
                      <tr>
                        <td>123400</td>
                        <td>65432</td>
                        <td>Mike Simon</td>
                        <td>$4567</td>
                        <td>3</td>
                        <td>6</td>
                        <td className="text-right"><Button color="default">Pay Now</Button></td>
                      </tr>
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
           
          </Row>
        </div>
      </>
    );
  }
}

export default Tables;
