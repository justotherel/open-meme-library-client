import React, { useState } from 'react'
import { Container, Button, Form, Grid, Sticky } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { signin } from 'actions/auth.actions'
import './sidebar.css'

function Sidebar() {
    const user = JSON.parse(localStorage.getItem('profile'))

    const initialState = {
        username: '',
        password: '',
    }

    const history = useHistory()
    const dispatch = useDispatch()
    const [formData, setFormData] = useState(initialState)

    const handleLoginSubmit = (e) => {
        e.preventDefault()
        dispatch(signin(formData, history))
    }

    const handleFormChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const content =
        user && user?.token ? (
            <Button.Group vertical style={{ paddingTop: 10 }}>
                <Button
                    size="big"
                    basic
                    as={Link}
                    to={`users/${user.username}`}
                    content="My profile"
                    icon="user circle outline"
                />
                <Button
                    size="big"
                    basic
                    as={Link}
                    to="/feed"
                    content="Feed"
                    icon="newspaper outline"
                />
                <Button
                    size="big"
                    basic
                    as={Link}
                    to="/create"
                    content="Create new post"
                    icon="pencil"
                />
            </Button.Group>
        ) : (
            <Sticky offset={49}>
                <Form
                    onSubmit={handleLoginSubmit}
                    size="small"
                    style={{ padding: 15 }}
                >
                    <Grid>
                        <Container>
                            <Grid.Row>
                                <label>
                                    <b>Username</b>
                                </label>
                                <input
                                    name="username"
                                    onChange={handleFormChange}
                                    type="text"
                                />
                            </Grid.Row>
                            <Grid.Row>
                                <label>
                                    <b>Password</b>
                                </label>
                                <input
                                    name="password"
                                    onChange={handleFormChange}
                                    type="password"
                                />
                            </Grid.Row>
                            <Grid.Row>
                                <Button
                                    size="small"
                                    fluid
                                    primary
                                    type="submit"
                                >
                                    Log in
                                </Button>
                            </Grid.Row>
                            <Grid.Row>
                                <Button
                                    size="small"
                                    fluid
                                    primary
                                    as={Link}
                                    to="/auth"
                                >
                                    Register
                                </Button>
                            </Grid.Row>
                            <Grid.Row>
                                <Button
                                    size="small"
                                    fluid
                                    as={Link}
                                    to="/forgotpassword"
                                >
                                    Forgot your password?
                                </Button>
                            </Grid.Row>
                        </Container>
                    </Grid>
                </Form>
            </Sticky>
        )

    return <>{content}</>
}

export default Sidebar
