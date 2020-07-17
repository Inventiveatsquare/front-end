import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  Form,
  Label,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
} from "reactstrap";

class Addpayment extends React.Component {
  render() {
    return (
      <>
        <div className="content">
        
<Form action="/charge" method="post" id="payment-form">
  <div class="form-row">
    <Label for="card-element">
      Credit or debit cardasdasd
    </Label>
    <div id="card-element">
     
    </div>

    <div id="card-errors" role="alert"></div>
  </div>

  <Button>Submit Payment</Button>
</Form>
        </div>
      </>
    );
  }
}

export default Addpayment;