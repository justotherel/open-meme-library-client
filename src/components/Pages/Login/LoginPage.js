import React, { useState, useEffect } from 'react'
import { Button, Card, Container, Form, Grid, Message } from 'semantic-ui-react'
import { Link, useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { signin } from 'actions/auth.actions'

import Input from 'components/Input/Input'

function LoginPage() {
    const initialState = {
        username: '',
        password: '',
    }

    const history = useHistory()
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)
    const [formData, setFormData] = useState(initialState)

    const handleLoginSubmit = (e) => {
        setLoading(true)
        e.preventDefault()
        dispatch(signin(formData, history))
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const isOpen = useSelector((state) => state.errorReducer.isOpen)
    const error = useSelector((state) => state.errorReducer.error)

    useEffect(() => {
        if (error) setLoading(false)
    }, [error])

    const ErrorMessage = (
        <>
            {isOpen && error && (
                <Message negative>
                    <Message.Header>Failed to log in</Message.Header>
                    <p>{error.error}</p>
                </Message>
            )}
        </>
    )

    return (
        <Grid style={{ margin: 25 }}>
            <Container style={{ width: 620, padding: 25 }}>
                <Grid.Column verticalAlign="middle">
                    <Card fluid>
                        <Container style={{ padding: 25 }}>
                            <Grid.Column
                                textAlign="center"
                                style={{ paddingTop: 25 }}
                            >
                                <h3>Login to Open Meme Library</h3>
                            </Grid.Column>
                            <Grid.Column style={{ paddingTop: 25 }}>
                                {ErrorMessage}
                            </Grid.Column>
                            <Form onSubmit={handleLoginSubmit}>
                                <Grid columns={2}>
                                    <Container
                                        style={{ width: 400, padding: 35 }}
                                    >
                                        <Grid.Row>
                                            <Input
                                                placeholder="username"
                                                name="username"
                                                handleChange={handleChange}
                                                label="Username"
                                                type="text"
                                            />
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Input
                                                placeholder="password"
                                                name="password"
                                                handleChange={handleChange}
                                                label="Password"
                                                type="password"
                                            />
                                        </Grid.Row>
                                        <Grid.Row>
                                            <Grid.Column width={2}>
                                                <Button.Group fluid>
                                                    {loading ? (
                                                        <Button primary loading>
                                                            Loading
                                                        </Button>
                                                    ) : (
                                                        <Button
                                                            primary
                                                            type="submit"
                                                        >
                                                            Log in
                                                        </Button>
                                                    )}
                                                    <Button.Or />
                                                    <Button
                                                        color="green"
                                                        as={Link}
                                                        to="/"
                                                    >
                                                        Register
                                                    </Button>
                                                </Button.Group>
                                            </Grid.Column>
                                        </Grid.Row>
                                    </Container>
                                </Grid>
                            </Form>
                        </Container>
                    </Card>
                </Grid.Column>
            </Container>
        </Grid>
    )
}

export default LoginPage
