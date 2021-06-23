import { useContext, useState } from 'react';
import { AuthContext } from '../../context/auth.js';
import { Modal, Form, Button } from 'react-bootstrap';

export default function Signin(props){
    const contextType = useContext(AuthContext);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleChange = (event)=>{
        if(event.target.name === 'username'){
            setUsername(event.target.value);
        }else{
            setPassword(event.target.value);
        }
    }

    const handleSubmit = (event)=>{
        event.preventDefault();
        props.onHide();
        contextType.login(username, password);
    }

    return (
        <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter"> signin </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="formBasicUsername">
                        <Form.Label> Username </Form.Label>
                        <Form.Control onChange={handleChange} name="username" type="text" placeholder="Please Enter Your username"/>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                    <Form.Label> Password </Form.Label>
                    <Form.Control onChange={handleChange} name="password" type="password" placeholder="Please Enter Your Password"/>
                </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="info" onClick={handleSubmit}> signin </Button>
            </Modal.Footer>
        </Modal>
    )
}