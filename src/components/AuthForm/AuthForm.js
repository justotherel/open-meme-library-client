import React, { useState } from "react";
import {
  Button,
  Container,
  Form,
  Card,
  Grid,
  Divider,
} from "semantic-ui-react";
import { GoogleLogin } from "react-google-login";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { AUTH } from "constants/actionTypes";
import { signin, signup } from "actions/auth.actions";
import Input from "components/Input/Input";

import "./authForm.css";

function AuthForm() {
  const initialState = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const history = useHistory();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState(initialState);

  const handleRegSubmit = (e) => {
    e.preventDefault();
    dispatch(signup(formData, history));
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    dispatch(signin(formData, history));
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const googleSuccess = async (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;

    try {
      dispatch({ type: AUTH, data: { result, token } });
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  const googleFailure = (error) => {
    console.log(error);
    console.log("Sign In unsuccsessfull");
  };

  return (
    <>
      <Container style={{ width: 350, height: 180, marginTop: 20 }}>
        <Card fluid style={{ padding: 20 }}>
          <Form onSubmit={handleLoginSubmit}>
            <Grid columns={2}>
              <Container style={{ width: 350 }}>
                <Grid.Row>
                  <Input
                    name="username"
                    handleChange={handleChange}
                    label="Username"
                    type="text"
                  />
                </Grid.Row>
                <Grid.Row>
                  <Input
                    name="password"
                    handleChange={handleChange}
                    label="Password"
                    type="password"
                  />
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={2}>
                    <Button primary type="submit">
                      Log in
                    </Button>
                    <Button as={Link} to="/forgotpassword">
                      Forgot your password?
                    </Button>
                  </Grid.Column>
                </Grid.Row>
              </Container>
            </Grid>
          </Form>
        </Card>
        <Card fluid style={{ padding: 20, marginBotton: 20 }}>
          <Form size="small" onSubmit={handleRegSubmit}>
            <Grid>
              <Container style={{ width: 400 }}>
                <Grid.Row textAlign="center" className="centered">
                  <h3>First time?</h3>
                  <Card.Meta>
                    <h5>Create a new account</h5>
                  </Card.Meta>
                </Grid.Row>
                <Grid.Row>
                  <Input
                    name="username"
                    handleChange={handleChange}
                    label="Username"
                    type="text"
                    required={true}
                  />
                </Grid.Row>
                <Grid.Row>
                  <Input
                    name="email"
                    handleChange={handleChange}
                    label="Email"
                    type="text"
                    required={true}
                  />
                </Grid.Row>
                <Grid.Row>
                  <Input
                    name="password"
                    handleChange={handleChange}
                    label="Password"
                    type="password"
                    required={true}
                  />
                </Grid.Row>
                <Grid.Row>
                  <Input
                    name="confirmPassword"
                    handleChange={handleChange}
                    label="Confirm password"
                    type="password"
                    required={true}
                  />
                </Grid.Row>
                <Grid.Row>
                  <Button color="green" type="submit" fluid>
                    Register
                  </Button>
                </Grid.Row>
                <Grid.Row textAlign="center">
                <Divider fitted horizontal>Or</Divider>
                </Grid.Row>
                <Grid.Row>
                  <GoogleLogin
                    clientId="440569179788-4j0imt9d35h4lh7smt5pb6d4qr3mqrv6.apps.googleusercontent.com"
                    render={(renderProps) => (
                      <Button
                        className="google-btn"
                        primary
                        fluid
                        onClick={renderProps.onClick}
                        disabl={renderProps.disabled}
                      >
                        Sigh up with Google
                      </Button>
                    )}
                    onSuccess={googleSuccess}
                    onFailure={googleFailure}
                    cookiePolicy="single_host_origin"
                  />
                </Grid.Row>
              </Container>
            </Grid>
          </Form>
        </Card>
      </Container>
    </>
  );
}

export default AuthForm;
