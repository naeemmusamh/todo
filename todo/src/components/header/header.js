import React, { useState, useContext} from "react";
import { If, Else, Then } from "react-if";
import { Navbar, Button } from "react-bootstrap";

import Signin from '../auth/signin.js';
import Signup from '../auth/signup';
import { AuthContext } from '../../context/auth.js';

export default function Header()  {
  const contextType = useContext(AuthContext);
  const [signinButton, setSigninButton] = useState(false);
  const [signupButton, setSignupButton] = useState(false);

  return (
    <Navbar className="header-bar" bg="primary" variant="dark" expand="true">
      <Navbar.Brand href="#">Home</Navbar.Brand>
      <If condition={contextType.loggedIn}>
        <Then>
          <Navbar.Brand>
            <Button variant="danger" onClick={contextType.logout}> sign out </Button>
          </Navbar.Brand>
        </Then>
        <Else>
          <Navbar.Brand className="d-flex justify-content-between">
            <Button className="mr-3" variant="outline-light" onClick={()=>{
              setSigninButton(true)
            }}> signin </Button>
            <Button className="mr-3" variant="outline-light" onClick={()=>{
              setSignupButton(true)
            }}> signup </Button>
          </Navbar.Brand>
        </Else>
      </If>
      <Signin show={signinButton} onHide={()=>{
        setSigninButton(false)
      }} />
      <Signup show={signupButton} onHide={()=>{
        setSignupButton(false)
      }} />
    </Navbar>
  );
};