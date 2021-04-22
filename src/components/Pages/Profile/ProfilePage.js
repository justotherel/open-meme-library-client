import React, { useState, useEffect } from 'react'
import {
    Card,
    Container,
    Grid,
    Image,
    Button,
    Modal,
    Form,
} from 'semantic-ui-react'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { getProfile, editProfile} from 'actions/profiles.actions'
import { getPostsByUser } from 'actions/posts.actions'
import Sidebar from 'components/Sidebar/Sidebar'
import Thumbnail from './Thumbnail/Thumbnail'

import './style.css'


function ProfilePage() {
    const user = useState(JSON.parse(localStorage.getItem('profile')))

    const id = '123'

    const { username } = useParams()

    const dispatch = useDispatch()

    //get user profile data
    //get posts by user
    useEffect(() => {
        dispatch(getProfile(username))
        // dispatch(getPostsByUser(username))
    }, [username])

    const profile = useSelector((state) => state.profiles.profile)
    const profilePic = useSelector((state) => state.profiles.profilePic)
    const posts = useSelector((state) => state.userPosts)

    const [open, setOpen] = useState(false)
    const initialState = {
        url: '',
        description: 'let them know',
    }
    const [formData, setFormData] = useState(initialState)

    function hadnleChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    const handleClick = (e) => {
        setOpen((prev) => !prev)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (formData.url && formData.description)
            dispatch(editProfile(username, formData))
        setOpen(false)
    }

    const editProfileModal = (
        <Modal
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            textAlign="center"
            style={{ width: 400 }}
        >
            <Modal.Content>
                <Container style={{ width: 350 }}>
                    <h2>Edit profile</h2>
                    <Form onSubmit={handleSubmit}>
                        <Form.Field>
                            <label>Profile picture url</label>
                            <input
                                name="url"
                                onChange={(e) => {
                                    setFormData({
                                        ...formData,
                                        [e.target.name]: e.target.value,
                                    })
                                }}
                                type="text"
                                placeholder={
                                    profilePic ? profilePic : 'url here'
                                }
                            />
                        </Form.Field>
                        <Form.Field>
                            <label>Short description</label>
                            <input
                                name="description"
                                onChange={(e) => {
                                    setFormData({
                                        ...formData,
                                        [e.target.name]: e.target.value,
                                    })
                                }}
                                type="text"
                                placeholder={
                                    profile?.description
                                        ? profile.description
                                        : 'let them know'
                                }
                            />
                        </Form.Field>
                        <Container style={{ paddingTop: 15 }}>
                            <Button type="submit" color="green">
                                Save
                            </Button>
                            <Link
                                className="close-btn"
                                onClick={() => setOpen((prev) => !prev)}
                            >
                                Close
                            </Link>
                        </Container>
                    </Form>
                </Container>
            </Modal.Content>
        </Modal>
    )

    const profileCard = !!(profile && profilePic) ? (
        <Card fluid centered style={{ padding: 10, marginTop: 10, width: 550 }}>
            <Card.Content textAlign="center" onClick={handleClick}>
                <Image
                    className="profilepic"
                    src={profilePic}
                    wrapped
                    ui={false}
                />
                <Card.Header>
                    <p>{profile.username}</p>
                </Card.Header>
                <Card.Meta>
                    <p>{profile.description}</p>
                </Card.Meta>
            </Card.Content>
            <Card.Content extra className="posts">
                <Grid columns={3}>
                    <Grid.Column as={Link} to={`/posts/${id}`}>
                        <Image src="https://sun9-75.userapi.com/impg/Up1sV9GHMNAbdAulI37AipNeWIaIcqyR4fiv7g/0SQ3x-wsRTs.jpg?size=500x361&quality=96&sign=cfb4ffd67df8eaac6dcda657ca71e786&type=album" />
                    </Grid.Column>
                </Grid>
            </Card.Content>
        </Card>
    ) : (
        <p>Loading...</p>
    )

    return (
        <Container style={{ width: 950 }}>
            {username === user[0].username ? editProfileModal : null}
            <Grid columns={2} style={{ marginTop: 0 }}>
                <Grid.Row>
                    <Grid.Column verticalAlign="top" width={4} style={{}}>
                        <Container>
                            <Sidebar />
                        </Container>
                    </Grid.Column>
                    <Grid.Column width={8}>{profileCard}</Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
    )
}

export default ProfilePage
