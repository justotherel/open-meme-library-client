import React, { useEffect, useState } from 'react'
import {
    Container,
    Grid,
} from 'semantic-ui-react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { fetchPost } from 'api/index'
import { getComments, getPost } from 'actions/posts.actions'
import SignlePost from 'components/SignlePost/SinglePost'
import PostDimmer from 'components/PostDimmer/PostDimmer'

function PostPage() {

    const { id } = useParams()
    const [post, setPost] = useState(null)
    const [profilePic, setProfilePic] = useState(null)    
    const dispatch = useDispatch()

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
        dispatch(getPost(id))
        dispatch(getComments(id))
    }, [id])


    return (
        <Grid centered columns={2}>
            <Grid.Column al="center">
                <Container stryle={{ width: 800 }}>
                    {post && !post?.id ? (
                        <SignlePost post={post} profilePic={profilePic} />
                    ) : (
                        <PostDimmer/>
                    )}
                </Container>
            </Grid.Column>
        </Grid>
    )
}

export default PostPage
