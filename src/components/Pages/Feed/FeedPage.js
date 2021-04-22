import React, { useEffect } from 'react'
import { Container, Grid, Dimmer, Loader } from 'semantic-ui-react'
import { useSelector, useDispatch } from 'react-redux'

import { getPosts, getPostsByTag } from 'actions/posts.actions.js'
import Post from 'components/PostCard/PostCard'
import Sidebar from 'components/Sidebar/Sidebar'
import { useParams } from 'react-router'
import PostDimmer from 'components/PostDimmer/PostDimmer'

function Feed() {
    const dispatch = useDispatch()
    const { tag } = useParams()

    useEffect(() => {
        if (tag) dispatch(getPostsByTag(tag))
        else dispatch(getPosts())
    }, [dispatch, tag])

    const data = useSelector((state) => state.posts)
    
    const posts = []
    
    return (
        <Container style={{ width: 950 }}>
            <Grid columns={2} style={{ marginTop: 0 }}>
                <Grid.Row>
                    <Grid.Column verticalAlign="top" width={4} style={{}}>
                        <Container>
                            <Sidebar />
                        </Container>
                    </Grid.Column>
                    <Grid.Column width={8}>
                        
                        {data && !data.length ? (
                            <>
                            <PostDimmer/>
                            <PostDimmer/>
                            <PostDimmer/>
                            </>
                        ) : (
                            data &&
                            data.map((post) => (
                                <Grid.Column
                                    key={post._id}
                                    style={{ padding: 10 }}
                                >
                                    <Post key={post._id} post={post} />
                                </Grid.Column>
                            ))
                        )}
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
    )
}

export default Feed
