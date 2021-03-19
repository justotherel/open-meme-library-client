import React, { useState } from "react";
import {useDispatch} from 'react-redux'

import {
  Button,
  Input,
  Menu,
} from "semantic-ui-react";

import { createComment } from "../../actions/posts.actions";

function LeaveCommentForm({postId}) {
  const user = JSON.parse(localStorage.getItem("profile"));
  const [isDisabled, setIsDisabled] = useState(false);
  const dispatch = useDispatch()
  const profilePic = user.profile ? user.result.imageUrl : user.profilePic;
  const [commentData, setCommentData] = useState({
    body: '',
    username: user.username
  });

  const menuStyle = {
    margin: 0,
    height: 50
  }


  const handleClick = (e) => {
    console.log("handle click called")
    dispatch(createComment(postId, commentData));
  }

  return (
    <Menu style={menuStyle} className='comment-input-box'>
      <Menu.Item style={{padding: 5}}>
        <img
          
          className="avatar"
          src="https://sun9-64.userapi.com/impf/lUAtXu9FGSwPgN-x52YokDYyt9-chCe93oycmA/45grPWc1ZZY.jpg?size=276x276&quality=96&sign=3f852e4b18f22e0aaafe9ab801707cb8&type=album"
        />
        <Input
          placeholder="leave a comment..."
          type="text"
          style={{ paddingLeft: 5, width: 325, height: 35}}
          onChange={(e) => setCommentData({...commentData, body: e.target.value})}
        />
      <Button floated='right' className="tertiary"  basic icon="send" style={{ padding: 5, paddingRight: 10 }} disabled={isDisabled} onClick={handleClick} />
      </Menu.Item>
    </Menu>
  );
}

export default LeaveCommentForm;
