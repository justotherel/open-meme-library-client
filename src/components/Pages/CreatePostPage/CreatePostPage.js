import React from 'react'
import { Container, Grid } from 'semantic-ui-react'

import PostForm from 'components/PostForm/PostForm'
import Sidebar from 'components/Sidebar/Sidebar'

function CreatePost() {
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
                        <PostForm />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
    )
}

export default CreatePost
