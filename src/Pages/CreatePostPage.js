import React from "react";
import { Grid } from "semantic-ui-react";

import PostForm from "../components/Forms/PostForm";
import Sidebar from "../components/Sidebar/Sidebar"

function CreatePost() {
  return (
    <Grid columns={2} >
      <Grid.Row>
        <Grid.Column verticalAlign="top" width={3} >
          <Sidebar />
        </Grid.Column>
        <Grid.Column width={8} style={{paddingTop: 15}}>
          <PostForm/>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default CreatePost;
