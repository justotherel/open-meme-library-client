import React, { useContext, useState, useEffect } from "react";
import { Button, Container, Dropdown, Menu } from "semantic-ui-react";
import { Link, useHistory, useLocation } from "react-router-dom";
import {useDispatch} from 'react-redux'



import { LOGOUT } from "../constants/actionTypes";

// import { AuthContext } from "../context/auth";

function Navbar() {

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))
  const dispatch = useDispatch()
  const history = useHistory()
  const location = useLocation()

  const logout = () => {
    dispatch({type: LOGOUT})
    setUser(null)
    history.push('/')
  }

  useEffect(() => {
    const token = user?.token
    
    //JWT

    setUser(JSON.parse(localStorage.getItem('profile')))

  }, [location])

  const pathName = window.location.pathname;
  const path = pathName === "/" ? "home" : pathName.substr(1);

  const [activeItem, setActiveItem] = useState(path);

  const handleItemClick = (e, { name }) => setActiveItem(name);

  const Navbar = user ? (
    <Menu pointing secondary>
      <Container>
        <Menu.Item
          name="home"
          active={activeItem === "home"}
          onClick={handleItemClick}
          as={Link}
          to="/"
        />
        <Menu.Item
          name="create post"
          active={activeItem === "create post"}
          onClick={handleItemClick}
          as={Link}
          to="/create"
        />
        <Menu.Item
          name="friends"
          active={activeItem === "friends"}
          onClick={handleItemClick}
        />
        <Menu.Menu position="right">
          {/* Needs to be changed */}
          <Menu.Item>
            <img className='avatar' src="http://ssmaker.ru/9bfb07d5.jpg" alt="user avatar" />
            <Dropdown item text="username">
              <Dropdown.Menu>
                <Dropdown.Item>
                  <h5 onClick={logout}>Logout</h5>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Item>
        </Menu.Menu>
      </Container>
    </Menu>
  ) : (
    <Menu pointing secondary>
      <Container>
        <Menu.Item
          name="home"
          active={activeItem === "home"}
          onClick={handleItemClick}
          as={Link}
          to="/"
        />
        <Menu.Item
          name="create post"
          active={activeItem === "create post"}
          onClick={handleItemClick}
          as={Link}
          to="/login"
        />
        <Menu.Item
          name="friends"
          active={activeItem === "friends"}
          onClick={handleItemClick}
        />
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
            to="/auth"
          >
            Register
          </Button>
        </Menu.Item>

        {/* <Menu.Item
          name="register"
          active={activeItem === "register"}
          onClick={handleItemClick}
          as={Link}
          to="/register"
        /> */}
      </Container>
    </Menu>
  );

  return Navbar;
}

export default Navbar;
