import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import FormRange from "react-bootstrap/esm/FormRange";


function Counter() {
    const [cookies,setCookie,removeCookie] = useCookies(["counter_id"]);
    const [cookies2, setCookie2, removeCookie2]= useCookies(["current_calling_queue"])

  const navigate = useNavigate()
  const baseUrl = "http://127.0.0.1:12345";
  const [post, setPost] = React.useState(null);



  const handleChange = (event) => {
    const value = event.target.value;
    setCounter_id(value)
  }

  
  function createPost() {
    axios.post(baseUrl + "/create_patient", { email: Patient.email, name: Patient.name, phoneNo: Patient.phoneNo }).then((response) => {
      setPost(response.data)
    });
  }
  const submitHandler = (event) => {
    event.preventDefault();
    createPost()
    console.log(Patient)
    console.log(File)
    navigate("/patientInfo", { state: { email: Patient.email, name: Patient.name, phoneNo: Patient.phoneNo ,photo:File.photo} });
    setPatient({})
  }


  return (
    <Container>
      <Form onSubmit={submitHandler}>

        <Form.Group className="mb-3" controlId="Phone NO.">
          <Form.Label>PhoneNo</Form.Label>
          <Form.Control type="number" name="phoneNo" placeholder="phoneNo" value={Patient.phoneNo} onChange={handleChange} required/>
        </Form.Group>
            
        <Button variant="primary" type="submit" >
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default Counter;