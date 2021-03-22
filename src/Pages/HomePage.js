import React, { useEffect } from "react";
import { Container, Grid, Dimmer, Loader, GridColumn } from "semantic-ui-react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { getPosts } from "../actions/posts.actions";
import Post from "../components/Post";
import Sidebar from "../components/Sidebar/Sidebar";

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  const posts = useSelector((state) => state.posts.reverse());

  console.log(posts);

  return (
    <Container style={{width: 950}}>
    <Grid columns={2}>
      <Grid.Row >
        <Grid.Column verticalAlign='top' width={4} style={{padding: 10}}>
          <Container>
          <Sidebar />
          </Container>
        </Grid.Column>
        <Grid.Column width={8} style={{paddingLeft: 0}}>
          {!posts.length ? (
            <Container>
              <Dimmer inverted active>
                <Loader>Loading</Loader>
              </Dimmer>
            </Container>
          ) : (
            posts &&
            posts.map((post) => (
              <Grid.Column key={post.id} style={{ padding: 10 }}>
                <Post post={post} />
              </Grid.Column>
            ))
          )}
        </Grid.Column>
      </Grid.Row>
    </Grid>
    </Container>
  );
}

export default Home;
