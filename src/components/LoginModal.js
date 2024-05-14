import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch } from 'react-redux'
import { useState } from 'react';
import passwordValidation from '../config/secret'

function LoginModal(props) {

    const dispatch = useDispatch()

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = (event, props) => {
        event.preventDefault();
        if (password === passwordValidation(user)) {
            dispatch({type: 'setUser', value: user})
            localStorage.setItem('user', user);
            props.onHide()
        } else {
            alert('Invalid Password!')
        }
        setUser(null);
        setPassword(null);

    }
    const handleNameChange = (event) => {
        setUser(event.target.value);
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }


    return (
        <Modal
            {...props}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Login
                </Modal.Title>
            </Modal.Header>
            <Form>
            <Modal.Body>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>User</Form.Label>
                        <Form.Control
                            type="user"
                            placeholder="user"
                            autoFocus
                            value={user}
                            onChange={handleNameChange}
                        />
                    </Form.Group>
                    <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlTextarea1"
                    >
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="password"
                            value={password}
                            onChange={handlePasswordChange}
                        />
                    </Form.Group>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.onHide}>Cancel</Button>
                <Button variant="primary" onClick={function(event) {handleSubmit(event, props)} }>
                    Submit
                </Button>
            </Modal.Footer>
            </Form>
        </Modal>
    );
}

export { LoginModal }