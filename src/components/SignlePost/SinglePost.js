import React from "react";
import {
  Card,
  Feed,
  Image,
  Label,
  Button,
  Icon,
  Comment,
  Loader,
  Popup
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import moment from "moment";

import Commentary from "components/Commentary/Commentary";
import LikeButton from "components/LikeButton/LikeButton";
import DeleteButton from "components/DeleteButton/DeleteButton";
import LeaveCommentForm from "components/LeaveCommentForm/LeaveCommentForm";

import "./singlePost.css";

function SignlePost(props) {
  const {
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
  } = props.post;
  const profilePic = props.profilePic;
  const commentators = props.commentators;
  const user = JSON.parse(localStorage.getItem("profile"));
  const id = _id;

  return (
    <Card style={{ width: 500, marginTop: 15 }}>
      <Card.Content>
        <Feed>
          <Feed.Event>
            <Feed.Label image={profilePic} />
            <Feed.Content>
              <Feed.Date content={moment(createdAt).fromNow()} />
              <Feed.Summary>{username}</Feed.Summary>
            </Feed.Content>
          </Feed.Event>
        </Feed>
      </Card.Content>
      <Image id="image" src={image} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{description}</Card.Header>
        <Card.Description>
          {tags.map(function (tag) {
            return (
              <Label as={Link} to={`/tags/${tag}`} style={{ margin: 2 }}>
                {tag}
              </Label>
            );
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
        <Popup
          trigger={<Button
            basic
            size="medium"
            className="tertiary"
            style={{ paddingLeft: 10, paddingRight: 10 }}
            onClick={() => {
              navigator.clipboard.writeText(image);
            }}
          >
            <Icon name="share" />
            Get link
          </Button>}
          content="Copied to the clipboard"
          on="click"
          hideOnScroll
          size='tiny'
        />
        
        {user && user.username === username && <DeleteButton postId={id} />}
      </Card.Content>
      <Card.Content>
        <Comment.Group>
          {commentators ? (
            comments.map((comment) => (
              <Commentary
                user={user}
                comment={comment}
                profilePic={
                  commentators.find(
                    (commentator) =>
                      commentator.commentator === comment.username
                  ).image
                }
              />
            ))
          ) : (
            <Loader>Loading</Loader>
          )}

          {user && <LeaveCommentForm postId={id} />}
        </Comment.Group>
      </Card.Content>
    </Card>
  );
}

export default SignlePost;
