import React, {useState} from "react";
import {
  Button,
  Container,
  Form,
  Card,
  Grid,
  Label,
  Icon,
} from "semantic-ui-react";
import { GoogleLogin } from "react-google-login";
import { Link } from "react-router-dom";
import {useDispatch} from 'react-redux'
import { useHistory } from "react-router-dom";

import {AUTH} from '../../constants/actionTypes'
import {signin, signup} from '../../actions/auth.actions'
import Input from "./Input";


function AuthForm() {

  const initialState = {
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  }

  const history = useHistory()
  const dispatch = useDispatch()
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))
  const [formData, setFormData] = useState(initialState)

  const handleRegSubmit = (e) => {
    e.preventDefault()
    dispatch(signup(formData, history))
  }

  const handleLoginSubmit = (e) => {
    e.preventDefault()
    dispatch(signin(formData, history))
  }

  const handleChange = (e) => {
      setFormData({...formData, [e.target.name] : e.target.value})
  }

  const googleSuccess = async (res) => {
    const result = res?.profileObj
    const token = res?.tokenId

    try {
      dispatch({type: AUTH, data: {result, token}})
      history.push('/')

    } catch (error) {
      console.log(error)
    }
  }

  const googleFailure = (error) => {
    console.log(error)
    console.log('Sign In unsuccsessfull') 
  }

  return (
    <>
      <Container style={{ width: 450 }}>
        <Card fluid style={{ padding: 15 }}>
          <Container style={{ width: 400 }}>
            <Form onSubmit={handleLoginSubmit}>
              <Input
                name="username"
                handleChange={handleChange}
                label="Username"
                type="text"
              />
              <Input
                name="password"
                handleChange={handleChange}
                label="Password"
                type="password"
              />
              <Button primary type="submit">
                Log in
              </Button>
              <Button floated="right" as={Link} to="/forgotpassword">
                Forgot your password?
              </Button>
            </Form>
          </Container>
        </Card>
        <Card fluid style={{ padding: 15 }}>
          <Container style={{ width: 400 }}>
            <Form size="small" onSubmit={handleRegSubmit}>
              <div className="centered ui header">
                <h3>First time?</h3>
                <Card.Meta>
                  <h5>Create a new account</h5>
                </Card.Meta>
              </div>
              <Input
                name="username"
                handleChange={handleChange}
                label="Username"
                type="text"
                required={true}
              />
              <Input
                name="email"
                handleChange={handleChange}
                label="Email"
                type="text"
                required={true}
              />
              <Input
                name="password"
                handleChange={handleChange}
                label="Password"
                type="password"
                required={true}
              />
              <Input
                name="confirmPassword"
                handleChange={handleChange}
                label="Confirm password"
                type="password"
                required={true}
              />

              <Button color="green" type="submit" fluid>
                Register
              </Button>
              <GoogleLogin
                clientId="440569179788-4j0imt9d35h4lh7smt5pb6d4qr3mqrv6.apps.googleusercontent.com"
                render={(renderProps) => (
                  <Button
                    className="google-btn"
                    primary
                    fluid
                    onClick={renderProps.onClick}
                    disabl={renderProps.disabled}
                  >Sigh up with Google</Button>
                )}
                onSuccess={googleSuccess}
                onFailure={googleFailure}
                cookiePolicy='single_host_origin'
              />
            </Form>
          </Container>
        </Card>
      </Container>
    </>
  );
}

export default AuthForm;
