import { useContext, useState } from 'react';
import { AuthContext } from '../../context/auth.js';
import { Modal, Form, Button } from 'react-bootstrap';

export default function Signup(props){
    const contextType = useContext(AuthContext);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [role, setRole] = useState('user');

    const handleChange = (event)=>{
        if(event.target.name === 'username'){
            setUsername(event.target.value);
        }else if (event.target.name === 'password'){
            setPassword(event.target.value);
        }else if(event.target.name === 'email'){
            setEmail(event.target.value);
        }else{
            setRole(event.target.value);
        }
    }

    const handleSubmit = (event)=>{
        event.preventDefault();
        props.onHide();
        contextType.signup(username, password, email, role);
    }

    return (
        <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter"> signup </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="formBasicUsername">
                        <Form.Label> username </Form.Label>
                        <Form.Control onChange={handleChange} name="username" type="text" placeholder="Please Enter Your username" required/>
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label> Email </Form.Label>
                        <Form.Control onChange={handleChange} name="email" type="email" placeholder="Example@anything.com" required/>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                    <Form.Label> Password </Form.Label>
                    <Form.Control onChange={handleChange} name="password" type="password" placeholder="Enter your Password" required/>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label> Role </Form.Label>
                <Form.Control onChange={handleChange} name="role" as="select">
                <option value="user">  User</option>
                <option value="editor"> Editor </option>
                <option value="admin"> Admin </option>
                </Form.Control>
            </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="info" onClick={handleSubmit}> Signup </Button>
            </Modal.Footer>
        </Modal>
    )
}