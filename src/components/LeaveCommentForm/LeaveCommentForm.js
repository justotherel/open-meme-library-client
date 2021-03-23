import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { Comment, Input } from "semantic-ui-react";
import { createComment } from "actions/posts.actions";
import defaultPic from "images/default.jpg";
import "./leaveCommentForm.css";

function LeaveCommentForm({ postId }) {
  const user = JSON.parse(localStorage.getItem("profile"));
  const dispatch = useDispatch();
  const profilePic = user?.result ? user.result.imageUrl : user.profilePic ?? defaultPic
  const [commentData, setCommentData] = useState({
    body: "",
    username: user.username,
  });

  const handleClick = (e) => {
    console.log("handle click called");
    dispatch(createComment(postId, commentData));
  };

  return (
    <Comment>
      <Comment.Avatar src={profilePic} className="avatar-my" />
      <Comment.Content>
        <Input
          fluid
          placeholder="leave a comment..."
          type="text"
          onChange={(e) =>
            setCommentData({ ...commentData, body: e.target.value })
          }
          action={{
            className: 'tertiary',
            icon: "send",
            onClick: handleClick
          }}
        />
      </Comment.Content>
    </Comment>
  );
}

export default LeaveCommentForm;
