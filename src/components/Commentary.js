import React from 'react'
import {Comment} from 'semantic-ui-react'
import moment from 'moment'
import { Link } from 'react-router-dom'

function Commentary( {user, comment: {username, createdAt, body}}) {
    return (
        <Comment>
            <Comment.Avatar 
                src='https://sun9-74.userapi.com/impf/0rfTdZArUW6L1GF5J1f_7mi7mhWFARZEOqIx_Q/VUIg41E6BCU.jpg?size=533x533&quality=96&sign=c5ccb04ee1032d9a4a9028f85ffc9fe8&type=album' 
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
