import React, { useState } from "react";
import { Form, Button, Card, Container } from "semantic-ui-react";
import FileBase from "react-file-base64";
import { useDispatch } from "react-redux";
import ReactTagInput from "@pathofdev/react-tag-input";

import { createPost } from "actions/posts.actions";

const PostForm = () => {
  const [postData, setPostData] = useState({
    description: "",
    tags: [],
    image: "",
  });

  const user = JSON.parse(localStorage.getItem("profile"));
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      createPost({ ...postData, user: user?.id, username: user?.username })
    );
  };

  if (!user?.id) {
    return (
      <Container style={{ width: 800 }}>
        <h1>
          Bitch you're trying to do something you're not authorized for. Get an
          account
        </h1>
      </Container>
    );
  }

  return (
    <Container style={{marginTop: 20}}>
    <Card fluid>
      <Form onSubmit={handleSubmit} style={{padding: 20}}>
        <h2>Create a post</h2>
        <Form.Field>
          <label>Description</label>
          <Form.Input
            placeholder="Description"
            name="description"
            value={postData.description}
            onChange={(e) =>
              setPostData({ ...postData, description: e.target.value })
            }
          />
        </Form.Field>
        <Form.Field>
        <label>Tags</label>
        <ReactTagInput
          placeholder="Add rlevant tags"
          editable={true}
          readOnly={false}
          removeOnBackspace={true}
          tags={postData.tags}
          onChange={(newTags) => {
            setPostData({ ...postData, tags: newTags });
          }}
        />
        </Form.Field>
        <Form.Field>
          <label>Image</label>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) => setPostData({ ...postData, image: base64 })}
          />
        </Form.Field>
        <Button type="submit" primary floated="right">
          Submit
        </Button>
      </Form>
    </Card>
    </Container>
  );
};

export default PostForm;
