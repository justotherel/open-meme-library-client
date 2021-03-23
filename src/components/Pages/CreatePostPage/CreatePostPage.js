import React from "react";
import { Container, Grid } from "semantic-ui-react";

import PostForm from "components/PostForm/PostForm";
import Sidebar from "components/Sidebar/Sidebar";

function CreatePost() {
  return (
    <Container style={{ width: 950}}>
      <Grid columns={2}>
        <Grid.Row>
          <Grid.Column verticalAlign="top" width={4} style={{ padding: 10 }}>
            <Container>
              <Sidebar />
            </Container>
          </Grid.Column>
          <Grid.Column width={8} style={{ paddingLeft: 0 }}>
            <PostForm />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
}

export default CreatePost;
