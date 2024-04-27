import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import axios from "axios";
import {useCookies} from "react-cookie";
import { useSearchParams } from "react-router-dom";

function Counter() {
    const [cookies,setCookie,removeCookie] = useCookies(["counter_id","current_calling_queue"]);
    // const [cookies2, setCookie2, removeCookie2]= useCookies(["current_calling_queue"])
    const [searchParams, setSearchParams]=useSearchParams();

  const baseUrl = "http://127.0.0.1:12345";



  const handleChange = (event) => {
    const value = event.target.value;
    setCookie("counter_id",value)
  }


  function submitHandler(event ){
    event.preventDefault()
    console.log("hi")
    

    console.log(searchParams.get("place_id"))
    axios.post(baseUrl + "/call", { "place_id": searchParams.get("place_id"), "counter_id":cookies?.counter_id} ).then((response) => {
      console.log(response.data)
      if(response.data == 0){
        setCookie("current_calling_queue","No queues yet")
      } else{
          setCookie("current_calling_queue","Calling queue: "+ response.data.current_calling_queue_no)
      }
    });
  }


  return (
    <Container>
      <Form onSubmit={submitHandler}>

        <Form.Group className="mb-3" controlId="Phone NO.">
          <Form.Label>Counter Number</Form.Label>
          <Form.Control type="number" name="counter" placeholder="Counter Number" value={cookies?.counter_id} onChange={handleChange} required/>
        </Form.Group>
            
        <Button variant="primary" type="submit" >
          Submit
        </Button>
        <p>
        {cookies?.current_calling_queue}
        </p>
      </Form>
    </Container>
  );
}

export default Counter;