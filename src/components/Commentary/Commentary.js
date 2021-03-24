import React from 'react'
import {Comment} from 'semantic-ui-react'
import moment from 'moment'
import { Link } from 'react-router-dom'

import './avatar.css'

function Commentary( {user, comment: {username, createdAt, body}, profilePic}) {

    return (
        <Comment>
            <Comment.Avatar 
                src={profilePic}
                className='avatar'
            />
            <Comment.Content>
                <Comment.Author as={Link} to={`/users/${username}`}>{username}</Comment.Author>
                <Comment.Metadata>
                    {moment(createdAt).fromNow()}
                </Comment.Metadata>
                <Comment.Text>{body}</Comment.Text>
                <Comment.Actions>
                    {user && user.username === username && (
                        <Comment.Action>Delete</Comment.Action>
                    )}
                </Comment.Actions>
            </Comment.Content>
        </Comment>
    )
}

export default Commentary
