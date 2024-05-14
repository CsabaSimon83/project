import { useState } from 'react';
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import {LoginModal} from "./LoginModal";

function NavBarTop(){
    const [modalShow, setModalShow] = useState(false);
    return (
        <div>
            <Navbar fixed="top" className="topNav">
                <Container>
                    <Navbar.Toggle />
                    <Navbar.Collapse className={"justify-content-end"}>
                        <Button className="loginButton" variant="light" onClick={() => setModalShow(true)}>
                            <img src="icons/lock-filled-svgrepo-com.svg" width="9" height="9" alt="login" style={{'marginRight': '0.2rem'}}/>
                            <div style={{'display': 'inline', 'vertical-align':'middle'}}>LOGIN</div>
                        </Button>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <LoginModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </div>
    )
}

export default NavBarTop