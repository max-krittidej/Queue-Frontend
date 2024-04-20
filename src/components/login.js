import React,{useState, useEffect} from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import axios from "axios";
import {useNavigate, Navigate} from "react-router-dom";
import {useCookies} from "react-cookie";
import moment from 'moment';

export default function Login(){



    const [cookies,setCookie,removeCookie] = useCookies(["login"]);
    const [Patient, setPatient] = useState({})
    const[post,setPost]=React.useState(null); 
    useEffect(()=> {
      if(post){
        
      setPatient({})
      var login = {
          "is_logged": true,
          "expiry": moment().add(1,"h"),
          "token": null,
          "role": null
      }
      setCookie("login",login,{path:"/"})
      navigate("/" )
     
      } ;
      
    },[post])

    const handleSetCookie=()=>{
        
    }
    const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setPatient((values) => ({
      ...values, [name]: value
    }))
  }
    async function createPost() {
        const baseUrl = "http://127.0.0.1:8080";
    await axios.post(baseUrl + "/check_account", { username: Patient.username, password: Patient.password}).then((response) => {
      var result = response.data
      setPost(result["auth"])
    });
  }
  const navigate = useNavigate()
  const submitHandler = async (event) => {
    event.preventDefault();
    // createPost()
    const baseUrl = "http://127.0.0.1:8080";
    axios.post(baseUrl + "/check_account", { username: Patient.username, password: Patient.password}).then((response) => {
      var result = response.data
      setPost(result["auth"])
     })
    }
    return (
<Container>


      <Form onSubmit={submitHandler}>
        
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" name="username" placeholder="username" value={Patient.username || ""} onChange={handleChange} required />
        </Form.Group>   
    
    <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" placeholder="Password" value={Patient.password || ""} onChange={handleChange} required />
        </Form.Group>
        {!post && post != null? (
          <div>incorrect username or password</div>
        ):(
          <div></div>
        )}
        <Button variant="primary" type="submit" >
          Submit
        </Button>
      </Form>
    </Container>
  );
    
  }
