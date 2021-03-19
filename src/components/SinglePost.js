import React from "react";
import { Card, Feed, Image, Label, Button, Icon, Comment } from "semantic-ui-react";
import { Link } from "react-router-dom";
import moment from "moment";

import Commentary from "./Commentary";
import LikeButton from "./Buttons/LikeButton";
import DeleteButton from "./Buttons/DeleteButton";
import LeaveCommentForm from "./Forms/LeaveCommentForm";

function SignlePost({
  post: {
    description,
    image,
    createdAt,
    tags,
    _id,
    username,
    likeCount,
    comments,
    commentsCount,
    likes,
  },
}) {
  const user = JSON.parse(localStorage.getItem("profile"));
  const id = _id;

  return (
    <Card style={{ width: 400 }}>
      <Card.Content>
        <Feed>
          <Feed.Event>
            <Feed.Label image="https://sun9-15.userapi.com/impf/d2yLRODEiinlDkERStY8EyoODQUJlJvpDGO3Nw/HQbcKraJFo0.jpg?size=438x510&quality=96&sign=ae2fa483d9d1e1097c8ce8ff8cc29b20&type=album" />
            <Feed.Content>
              <Feed.Date content={moment(createdAt).fromNow()} />
              <Feed.Summary>{username}</Feed.Summary>
            </Feed.Content>
          </Feed.Event>
        </Feed>
      </Card.Content>
      <Image src={image} wrapped ui={false} as={Link} to={`/posts/${id}`} />
      <Card.Content>
        <Card.Header>{description}</Card.Header>
        <Card.Meta as={Link} to={`/posts/${id}`}>
          <span className="date">{moment(createdAt).fromNow()}</span>
        </Card.Meta>
        <Card.Description>
          {tags.map(function (tag) {
            return <Label style={{ margin: 2 }}>{tag}</Label>;
          })}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <LikeButton id={id} likeCount={likeCount} likes={likes} />
        <Button
          basic
          size="medium"
          className="tertiary"
          style={{ paddingLeft: 10, paddingRight: 10 }}
        >
          <Icon name="comment outline" />
          {commentsCount}
        </Button>
        {user && user.username === username && <DeleteButton postId={id} />}
      </Card.Content>
      <Card.Content>
        <Comment.Group>
          {comments.map((comment) => (
            <Commentary user={user} comment={comment} />
          ))}
          </Comment.Group>
      </Card.Content>
      {user && <LeaveCommentForm postId={id} />}
    </Card>
  );
}

export default SignlePost;
