import React, { useState } from 'react'
import {
    Container,
    Button,
    Form,
    Grid,
    Sticky,
    Card,
    Item,
    Icon,
} from 'semantic-ui-react'
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
            <Sticky offset={69}>
                <Card style={{ marginTop: 10 }}>
                    <Card.Content>
                        <Container>
                            <Item.Group>
                                <Item
                                    className="sidebarItem"
                                    as={Link}
                                    to={`users/${user.username}`}
                                >
                                    <Icon
                                        className="sidebarIcon"
                                        size="large"
                                        name="user circle outline"
                                    />
                                    <p>My profile</p>
                                </Item>
                                <Item
                                    className="sidebarItem"
                                    as={Link}
                                    to="/feed"
                                >
                                    <Icon
                                        className="sidebarIcon"
                                        size="large"
                                        name="newspaper outline"
                                    />
                                    <p>Feed</p>
                                </Item>
                                <Item
                                    className="sidebarItem"
                                    as={Link}
                                    to="/create"
                                >
                                    <Icon
                                        className="sidebarIcon"
                                        size="large"
                                        name="pencil"
                                    />
                                    <p>Create new post</p>
                                </Item>
                            </Item.Group>
                        </Container>
                    </Card.Content>
                </Card>
            </Sticky>
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
