import React from "react";
import { Row, Col, FormGroup, Label, Input, Button } from "reactstrap";

function Sociallinkone() {
  return (
    <>
      <Row className="d-flex justify-content-center mt-5 shadow p-2  bg-body rounded">
        <Col md={3} className="d-flex justify-content-between flex-column p-3">
          <div className="d-flex  gap-3 ">
            <div>
              <Button
                color=""
                className="text-success"
                style={{ background: "#c6e3d5" }}
              >
                1
              </Button>
            </div>
            <div>
              <h6>Accounts details</h6>
              <span>Enter Your Account Details</span>
            </div>
          </div>
          <div className="d-flex  gap-3 ">
            <div>
              <Button
                color=""
                className="text-success"
                style={{ background: "#c6e3d5" }}
              >
                2
              </Button>
            </div>
            <div>
              <h6>Personal Info</h6>
              <span>Add Personal Info</span>
            </div>
          </div>
          <div className="d-flex  gap-3 ">
            <div>
              <Button
                color=""
                className="text-success"
                style={{ background: "#c6e3d5" }}
              >
                3
              </Button>
            </div>
            <div>
              <h6>Address</h6>
              <span>Add Address</span>
            </div>
          </div>
          <div className="d-flex gap-3">
            <div>
              <Button
                color=""
                className="text-success"
                style={{ background: "#c6e3d5" }}
              >
                4
              </Button>
            </div>
            <div>
              <h6>Social Links</h6>
              <span>Add Social Links</span>
            </div>
          </div>
        </Col>
        <Col md={9} className="p-3">
          <Row className="">
            <h6 className="mb-0">Social Links</h6>
            <p className="mt-0">Enter your Social Links</p>
            <Col md={6}>
              <FormGroup>
                <Label for="exampleUrl">Twitter</Label>
                <Input
                  id="exampleUrl"
                  name="url"
                  placeholder="https//twitter.com//abc"
                  type="url"
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="examplePassword">Facebook</Label>
                <Input
                  id="exampleUrl"
                  name="url"
                  placeholder="https//facebook.com/abc"
                  type="url"
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label for="exampleUrl">google*</Label>
                <Input
                  id="exampleUrl"
                  name="url"
                  placeholder="https//google.com//abc"
                  type="url"
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="examplePassword">Linkedin</Label>
                <Input
                  id="exampleUrl"
                  name="url"
                  placeholder="https//Linkedin.com/abc"
                  type="url"
                />
              </FormGroup>
            </Col>
            <div className="d-flex justify-content-center  justify-content-between">
              <Button color="success" size="sm">
                Previous
              </Button>
              <Button color="success" size="sm">
                Submit
              </Button>
            </div>
          </Row>
        </Col>
      </Row>
    </>
  );
}

export default Sociallinkone;
