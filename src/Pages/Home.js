import React from 'react'
import {Container, Grid, Dimmer, Loader} from 'semantic-ui-react'
import {useSelector} from 'react-redux'

import Post from '../components/Post'


function Home() {

    const posts = useSelector((state) => state.posts)

    console.log(posts)
   
    return (
        // <PostForm/>
        <Grid columns={3}>
            <Grid.Column>
                <h1>Recen posts</h1>
            </Grid.Column>
            <Grid.Row >
                {!posts.length ? (
                    <Container>
                        <Dimmer inverted active>
                            <Loader>Loading</Loader>
                        </Dimmer>
                    </Container>
                    
                ) : (
                    posts && posts.map(post => (
                        <Grid.Column key={post.id} style={{padding: 10}}>
                            <Post post={post} />
                        </Grid.Column>
                    ))
                )}
            </Grid.Row>
        </Grid>
    )
}

export default Home


