import React, { useEffect, useState, useRef, useCallback } from 'react'
import { Container, Grid, Dimmer, Loader } from 'semantic-ui-react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router'

import { getPosts, getPostsByTag } from 'actions/posts.actions.js'
import Post from 'components/PostCard/PostCard'
import Sidebar from 'components/Sidebar/Sidebar'

function Feed() {
    const { tag } = useParams()
    const dispatch = useDispatch()

    const amount = 5
    const observer = useRef()
    const [page, setPage] = useState(1)
    const [isLoading, setIsLoading] = useState(false)

    const lastPostElementRef = useCallback(
        (node) => {
            if (isLoading) return
            if (observer.current) observer.current.disconnect()
            observer.current = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting) {
                    console.log('Visible')
                    setPage((prevPage) => prevPage + 1)
                    setIsLoading(true)
                }
            })
            if (node) observer.current.observe(node)
        },
        [isLoading],
    )

    useEffect(() => {
        if (tag) dispatch(getPostsByTag(tag))
        else dispatch(getPosts(page, amount))
        setIsLoading(false)
    }, [dispatch, tag, page, amount])

    const data = useSelector((state) => state.posts)
    const posts = []

    if (data) {
        data.map((post) => {
            posts.push(post._doc)
        })
    }

    const loading = (
        <Container>
            <Dimmer inverted active>
                <Loader>Loading</Loader>
            </Dimmer>
        </Container>
    )
    
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
                        {posts && !posts.length ? (
                            <Grid.Column width={8}>{loading} </Grid.Column>
                        ) : (
                            posts.map((post, index) => (
                                <div
                                    ref={
                                        posts.length === index + 1
                                            ? lastPostElementRef
                                            : undefined
                                    }
                                >
                                    <Grid.Column
                                        width={8}
                                        key={post._id}
                                        style={{ padding: 10 }}
                                    >
                                        <Post
                                            key={post._id}
                                            post={post}
                                            style={{ padding: 10 }}
                                        />
                                    </Grid.Column>
                                </div>
                            ))
                        )}
                        {isLoading ? <Grid.Column width={8}>{loading} </Grid.Column> : <></>}
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
    )
}

export default Feed
