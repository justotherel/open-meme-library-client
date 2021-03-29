import React, { useEffect, useState } from 'react'
import {
    Container,
    Dimmer,
    Grid,
    Loader,
    Card,
    Feed,
    Image,
    Segment,
} from 'semantic-ui-react'
import { useParams } from 'react-router-dom'

import { fetchPost, fetchComments } from 'api/index'
import SignlePost from 'components/SignlePost/SinglePost'
import shortP from 'images/short-paragraph.png'
import mediaP from 'images/media-paragraph.png'
import image from 'images/image.png'

function PostPage() {
    const { id } = useParams()

    const [post, setPost] = useState(null)
    const [profilePic, setProfilePic] = useState(null)
    const [comments, setComments] = useState(null)
    const [commentators, setCommentators] = useState(null)

    useEffect(() => {
        let isSubcribed = true
        fetchPost(id).then((response) => {
            if (isSubcribed) {
                setPost(response.data.post)
                setProfilePic(response.data.profilePic)
            }
            return () => (isSubcribed = false)
        })
        // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, [id])

    useEffect(() => {
        let isSubcribed = true
        fetchComments(id).then((response) => {
            if (isSubcribed) {
                setComments(response.data.comments)
                setCommentators(response.data.profilePics)
            }
        })

        return () => (isSubcribed = false)
    }, [])

    const loading = (
        <Card style={{ width: 500, marginTop: 15 }}>
            <Card.Content>
                <Feed>
                    <Feed.Event>
                        <Feed.Content>
                            <Image src={mediaP} alt="dimmer" size="small" />
                        </Feed.Content>
                    </Feed.Event>
                </Feed>
            </Card.Content>
            <Dimmer.Dimmable as={Segment}>
                <Dimmer active={true} inverted>
                    <Loader size="massive" inverted></Loader>
                </Dimmer>
                <Image src={image} wrapped />
            </Dimmer.Dimmable>
            <Card.Content>
                <Card.Description>
                    <p>
                        <Image src={shortP} />
                    </p>
                </Card.Description>
            </Card.Content>
        </Card>
    )

    return (
        <Grid centered columns={2}>
            <Grid.Column al="center">
                <Container stryle={{ width: 800 }}>
                    {post && !post?.id ? (
                        <SignlePost
                            post={post}
                            comments={comments}
                            profilePic={profilePic}
                            commentators={commentators}
                        />
                    ) : (
                        loading
                    )}
                </Container>
            </Grid.Column>
        </Grid>
    )
}

export default PostPage
