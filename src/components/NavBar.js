import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Dropdown from 'react-bootstrap/Dropdown';
import NavItem from 'react-bootstrap/NavItem';
import NavLink from 'react-bootstrap/NavLink';
import Container from "react-bootstrap/Container";
import {useSelector, useDispatch} from "react-redux";

function UserMenu({user}){
    const dispatch = useDispatch()

    const setUser = () => {
        dispatch({type: 'setUser', value: null})
        localStorage.setItem('user', null);
    }

    if (user !== null) {
        return (
            <>
                <img src="icons/favorite-svgrepo-com.svg" width="25" height="25" alt="favorite"
                     style={{'marginRight': '0.2rem'}}/>
                <Dropdown as={NavItem}>
                    <Dropdown.Toggle as={NavLink}>
                        <img src="icons/user-svgrepo-com.svg" width="30" height="30" alt="favorite"
                             style={{'marginRight': '0.2rem'}}/>
                    </Dropdown.Toggle>
                    <Dropdown.Menu align={"end"}>
                        <Dropdown.ItemText>Sign as {user}</Dropdown.ItemText>
                        <Dropdown.Divider />
                        <Dropdown.Item onClick={setUser}>Logout</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </>
        )
    }
}

export default function NavBar() {
    const user = useSelector(state => state.user)

    return (
        <Navbar className="bg-body-tertiary" style={{'marginTop': '1.2rem'}}>
            <Container>
                <Navbar.Brand style={{'fontSize': '2rem'}}>LIBRARY</Navbar.Brand>
                <Nav.Item style={{'lineHeight': '2rem', 'marginLeft': '2rem'}}>
                    <Nav.Link style={{'color': '#ff9606'}} href="/home" >HOMES</Nav.Link>
                </Nav.Item>
                <Navbar.Collapse className="justify-content-end">
                    <UserMenu user={user}/>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}