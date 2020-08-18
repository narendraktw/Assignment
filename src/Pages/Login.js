import React, {useRef, useState } from "react"
import { useHistory } from 'react-router-dom'
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap"
import "../Css/Login.css"
import { setUserSession } from '../Utils/Common';

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const formRef = useRef(null);
  const history = useHistory();
  // validate login form
  const handleLogin = () => {
    return email.length > 0 && password.length > 0;
  }

  //Reset login control values...
  const handleReset = () => {
    formRef.current.reset();
  }

  function handleSubmit(event) {
    event.preventDefault();
    const loginUser = async () => {
      try {
        const result = await fetch(`https://reqres.in/api/login`, {
          method: 'post',
          body: JSON.stringify({ email: email, password: password }),
          headers: {
            'Content-Type': 'application/json'
          }
        });
        console.log(result);
       
        if(result.status===200){
          const response = await result.json();        
          console.log(result.status)
          setUserSession(response.token, email);         
          history.push('/users');
        }
        else if (result.status === 400) {
          throw new Error("User not found");
         
        }else{
          throw new Error("Something went wrong. You have entered the wrong username or password.");         
        }
        return result;
      } catch (error) {
            alert(error);              
      }
    }
    loginUser();
  }

  return (
    <div className="Login">
      <form ref={formRef}>
        <FormGroup controlId="email">
          <FormLabel>Email</FormLabel>
          <FormControl autoFocus type="email" value={email} onChange={e => setEmail(e.target.value)} />
        </FormGroup>
        <FormGroup controlId="password">
          <FormLabel>Password</FormLabel>
          <FormControl value={password} onChange={e => setPassword(e.target.value)} type="password" />
        </FormGroup>
        <Button block disabled={!handleLogin()} onClick={handleSubmit} type="submit">
          Login
        </Button>

        <Button block disabled={!handleLogin()} onClick={handleReset} type="submit">
          Reset
        </Button>
      </form>
    </div>
  );
}