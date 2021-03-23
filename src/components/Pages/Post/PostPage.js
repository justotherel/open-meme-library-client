import React, { useEffect, useState } from "react";
import {
  Container,
  Dimmer,
  Grid,
  Loader,
  Card,
  Feed,
  Image,
  Segment,
} from "semantic-ui-react";
import { useParams } from "react-router-dom";

import { fetchPost } from "api/index";
import SignlePost from "components/SignlePost/SinglePost";
import shortP from "images/short-paragraph.png";
import mediaP from "images/media-paragraph.png";
import image from "images/image.png";

function PostPage() {
  const { id } = useParams();

  // const post = useSelector((state) => (id ? state.posts.find((post) => post._id === id) : null));
  const [post, setPost] = useState(null);

  useEffect(() => {
    // POST request using axios inside useEffect React hook
    fetchPost(id).then((response) => {
      setPost(response.data);
    });
    // empty dependency array means this effect will only run once (like componentDidMount in classes)
  }, [id]);

  const loading = (
    <Card style={{ width: 500, marginTop: 15 }}>
      <Card.Content>
        <Feed>
          <Feed.Event>
            <Feed.Content>
              <Image src={mediaP} alt="dimmer" size="small" />
            </Feed.Content>
          </Feed.Event>
        </Feed>
      </Card.Content>
      <Dimmer.Dimmable as={Segment}>
        <Dimmer active={true} inverted>
          <Loader size="massive" inverted></Loader>
        </Dimmer>
        <Image src={image} wrapped />
      </Dimmer.Dimmable>

      <Card.Content>
        <Card.Description>
          <p>
            <Image src={shortP} />
          </p>
        </Card.Description>
      </Card.Content>
    </Card>
  );

  return (
    <Grid centered columns={2}>
      <Grid.Column al="center">
        <Container stryle={{ width: 800 }}>
          {post && !post.length ? <SignlePost post={post} /> : loading}
        </Container>
      </Grid.Column>
    </Grid>
  );
}

export default PostPage;
