import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import InputGroup from "react-bootstrap/InputGroup";
import { Formik } from "formik";

const FormComponent = ({ toggleShow }) => {
  return (
    <div
      style={{
        background: "rgba(26,27,29,0.5)",
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        padding: "5rem",
        overflowY: "auto",
        display: "flex",
        flexDirection:"row-reverse",
        justifyContent: "center "
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          // alignItems: "space-around",
          marginBottom: "20px",
          background: "white",
          overflowY: "auto",
          maxWidth: "50vw"
        }}
      >
        <Formik
          // validationSchema={schema}
          onSubmit={(value) => {
            console.log("value", value)
            toggleShow(false)
          }}
          initialValues={{}}
        >
          {({
            handleSubmit,
            handleChange,
            handleBlur,
            values,
            touched,
            isValid,
            errors,
          }) => (
            <Form noValidate onSubmit={handleSubmit} className="form-row">
              <Form.Row className="form-row">
                <Form.Group as={Col} md="5" controlId="leadDate">
                  <Form.Label>Lead Date</Form.Label>
                  <Form.Control
                    type="date"
                    name="leadDate"
                    value={values.leadDate}
                    onChange={handleChange}
                    isValid={touched.leadDate && !errors.leadDat}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} md="5" controlId="name">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                    isValid={touched.name && !errors.name}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                </Form.Row>

                <Form.Row>
                <Form.Group
                  as={Col}
                  md="5"
                  controlId="mobileNumber"
                >
                  <Form.Label>Mobile Number</Form.Label>
                    <Form.Control
                      type="number"      
                      name="mobileNumber"
                      value={values.mobileNumber}
                      onChange={handleChange}
                      isInvalid={!!errors.mobileNumber}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.mobileNumber}
                   </Form.Control.Feedback> 
                </Form.Group>
             
                <Form.Group as={Col}  md="5" controlId="whatsAppNumber">
                  <Form.Label>WhatsApp Number</Form.Label>
                  <Form.Control
                    type="number"
                    
                    name="whatsAppNumber"
                    value={values.whatsAppNumber}
                    onChange={handleChange}
                    isInvalid={!!errors.whatsAppNumber}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.whatsAppNumber}
                  </Form.Control.Feedback>
                </Form.Group>
                </Form.Row>

                <Form.Row>
                <Form.Group as={Col} md="5" controlId="panNumber">
                  <Form.Label>PAN Number</Form.Label>
                  <Form.Control
                    type="number"
                    name="panNumber"
                    value={values.panNumber}
                    onChange={handleChange}
                    isInvalid={!!errors.panNumber}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.panNumber}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} md="5" controlId="type">
                  <Form.Label>Type</Form.Label>
                  <Form.Control
                    as="select"
                    name="type"
                    value={values.type}
                    onChange={handleChange}
                    isInvalid={!!errors.type}
                  >
                    <option>IRDA</option>
                    <option>SAHI</option>
                    </Form.Control>
                  <Form.Control.Feedback type="invalid">
                    {errors.type}
                  </Form.Control.Feedback>
                </Form.Group>
              </Form.Row>
   
              <Form.Row>
              <Form.Group as={Col} md="5" controlId="partnerCompany">
                  <Form.Label>Partner Company</Form.Label>
                  <Form.Control
                    type="string"
                    name="partnerCompany"
                    value={values.partnerCompany}
                    onChange={handleChange}
                    isInvalid={!!errors.partnerCompany}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.partnerCompany}
                  </Form.Control.Feedback>
                </Form.Group>
                
                <Form.Group as={Col} md="5" controlId="city">
                  <Form.Label>City</Form.Label>
                  <Form.Control
                    type="string"
                    name="city"
                    value={values.city}
                    onChange={handleChange}
                    isInvalid={!!errors.city}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.city}
                  </Form.Control.Feedback>
                </Form.Group>
                </Form.Row>

                <Form.Row>
                <Form.Group as={Col} md="5" controlId="branch">
                  <Form.Label>Branch</Form.Label>
                  <Form.Control
                    type="string"
                    name="branch"
                    value={values.branch}
                    onChange={handleChange}
                    isInvalid={!!errors.branch}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.branch}
                  </Form.Control.Feedback>
                </Form.Group>
                
                <Form.Group as={Col} md="5" controlId="leadStatus">
                  <Form.Label>Lead Status</Form.Label>
                  <Form.Control
                    as="select"
                    name="leadStatus"
                    value={values.leadStatus}
                    onChange={handleChange}
                    isInvalid={!!errors.leadStatus}
                  >
                  <option>Picked</option>
                  <option>Closed</option>
                  <option>Cooded</option>
                  <option>Pending</option>
                  </Form.Control>
                  <Form.Control.Feedback type="invalid">
                    {errors.leadStatus}
                  </Form.Control.Feedback>
                </Form.Group>
                </Form.Row>

              <Form.Row>
                <Form.Group as={Col} md="5" controlId="lastRemark">
                  <Form.Label>Last Remark</Form.Label>
                  <Form.Control
                    type="string"
                    name="lastRemark"
                    value={values.lastRemark}
                    onChange={handleChange}
                    isInvalid={!!errors.lastRemark}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.lastRemark}
                  </Form.Control.Feedback>
                </Form.Group>


                <Form.Group as={Col} md="5" controlId="lastStatusDate">
                  <Form.Label>Last Status Date</Form.Label>
                  <Form.Control
                    type="date"
                    name="lastStatusDate"
                    value={values.lastStatusDate}
                    onChange={handleChange}
                    isInvalid={!!errors.lastStatusDate}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.lastStatusDate}
                  </Form.Control.Feedback>
                </Form.Group>
                </Form.Row>

                <Form.Row>
                <Form.Group as={Col} md="5" controlId="leadAging">
                  <Form.Label>Lead Aging</Form.Label>
                  <Form.Control
                    type="number"
                    name="leadAging"
                    value={values.leadAging}
                    onChange={handleChange}
                    isInvalid={!!errors.leadAging}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.leadAging}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} md="5" controlId="agencyCode">
                  <Form.Label>Agency Code</Form.Label>
                  <Form.Control
                    type="string"
                    name="agencyCode"
                    value={values.agencyCode}
                    onChange={handleChange}
                    isInvalid={!!errors.agencyCode}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.agencyCode}
                  </Form.Control.Feedback>
                </Form.Group>
                </Form.Row>

                <Form.Row>
                <Form.Group as={Col} md="5" controlId="agencyDate">
                  <Form.Label>Agency Date</Form.Label>
                  <Form.Control
                    type="date"
                    name="agencyDate"
                    value={values.agencyDate}
                    onChange={handleChange}
                    isInvalid={!!errors.agencyDate}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.agencyDate}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} md="5" controlId="codeAging">
                  <Form.Label>Code Aging</Form.Label>
                  <Form.Control
                    type="number"
                    name="codeAging"
                    value={values.codeAging}
                    onChange={handleChange}
                    isInvalid={!!errors.codeAging}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.codeAging}
                  </Form.Control.Feedback>
                </Form.Group>
                </Form.Row>

                <Form.Row>
                <Form.Group as={Col} md="5" controlId="businessActive">
                  <Form.Label>Business Active</Form.Label>
                  <Form.Control
                    as="select"
                    name="businessActive"
                    value={values.businessActive}
                    onChange={handleChange}
                    isInvalid={!!errors.businessActive}
                  >
                  <option>Yes</option>
                  <option>No</option>
                  </Form.Control>
                  <Form.Control.Feedback type="invalid">
                    {errors.businessActive}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group as={Col} md="5" controlId="businessPremium">
                  <Form.Label>Business Premium</Form.Label>
                  <Form.Control
                    type="string"
                    name="businessPremium"
                    value={values.businessPremium}
                    onChange={handleChange}
                    isInvalid={!!errors.businessPremium}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.businessPremium}
                  </Form.Control.Feedback>
                </Form.Group>
                </Form.Row>

                <Form.Row>
              <Button type="submit" style={{marginBottom: "2rem"}}>Submit form</Button>
              </Form.Row>
            </Form>
          )}
        </Formik>
        <Button
          variant="outline-dark"
          onClick={() => toggleShow(false)}
          style={{maxHeight: "3.3rem", padding: "0.01rem", marginTop: "1rem", marginRight: "0.5rem"}}
        >
          Go Back
        </Button> 
      </div>
    </div>
  );
};

export default FormComponent;
