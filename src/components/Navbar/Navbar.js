import React, { useState, useEffect } from "react";
import {
  Button,
  Container,
  Dropdown,
  Menu,
  Sticky,
  Input,
} from "semantic-ui-react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import decode from "jwt-decode";

import { LOGOUT } from "constants/actionTypes";
import './navbar.css'

function Navbar() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const logout = () => {
    dispatch({ type: LOGOUT });
    setUser(null);
    window.location.reload();
    history.push("/feed");

  };

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  const Navbar = user ? (
    <Sticky>
      <Menu secondary className="bg-white" borderless>
        <Container style={{ width: 950 }}>
          <Menu.Item name="Open Meme Library" as={Link} to="/feed" className='logo'>
            <h3>Open Meme Library</h3>
          </Menu.Item>
          <Menu.Item>
            <Input
              className="input-bg"
              inverted
              icon="search"
              placeholder="Search..."
            />
          </Menu.Item>
          <Menu.Item position="right">
            <img
              className="avatar"
              src={
                user.profilePic
                  ? user.profilePic
                  : "https://sun9-40.userapi.com/impf/yY2B_SB8yqDDu3GEmIQW3VcsuDXkXv6i5Yq2ZQ/nV_iFXiTmeE.jpg?size=572x572&quality=96&sign=87395866e3b4df6fb8db04990cdb89cd"
              }
              alt="user avatar"
            />
            <Dropdown item text={user.username}>
              <Dropdown.Menu>
                <Dropdown.Item>
                  <h5 onClick={logout}>Logout</h5>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Item>
        </Container>
      </Menu>
    </Sticky>
  ) : (
    <Sticky>
      <Menu secondary className="bg-white" borderless>
        <Container style={{ width: 950 }}>
          <Menu.Item name="Open Meme Library" as={Link} to="/feed" className='logo'>
            <h3>Open Meme Library</h3>
          </Menu.Item>
          <Menu.Item>
            <Input className="icon" icon="search" placeholder="Search..." />
          </Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item
            // name="login"
            // active={activeItem === "login"}
            // onClick={handleItemClick}
            // as={Link}
            // to="/login"
            />
          </Menu.Menu>
          <Menu.Item>
            <Button
              className="round-btn"
              size="tiny"
              primary
              as={Link}
              to="/"
            >
              Register
            </Button>
          </Menu.Item>
        </Container>
      </Menu>
    </Sticky>
  );

  return Navbar;
}

export default Navbar;
