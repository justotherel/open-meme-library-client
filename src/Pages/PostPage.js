import React, { useEffect, useState } from "react";
import { Container, Grid } from "semantic-ui-react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { fetchPost } from "../api/index";

import { getPost } from "../actions/posts.actions";
import SignlePost from "../components/SinglePost";

function PostPage() {
  const { id } = useParams();
  
  const post = useSelector((state) => (id ? state.posts.find((post) => post._id === id) : null));
  console.log(post)

  // useEffect(() => {
  //   // POST request using axios inside useEffect React hook
  //   fetchPost(id).then((response) => {
  //     setPost(response.data);
  //   });

  //   // empty dependency array means this effect will only run once (like componentDidMount in classes)
  // }, []);

  return (
    <Grid centered columns={2}>
      <Grid.Column al="center">
        <Container stryle={{ width: 800 }}>
          {post && <SignlePost post={post} />}
        </Container>
      </Grid.Column>
    </Grid>
  );
}

export default PostPage;
