import React from 'react'
import { Comment } from 'semantic-ui-react'
import moment from 'moment'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import './avatar.css'
import { deleteComment } from 'actions/posts.actions'

function Commentary({
    user,
    id,
    comment: { _id, username, createdAt, body },
    profilePic,
}) {
    const dispatch = useDispatch()

    const handleDelete = async (e) => {
        dispatch(deleteComment(id, _id))
    }

    return (
        <Comment>
            <Comment.Avatar src={profilePic} className="avatar" />
            <Comment.Content>
                <Comment.Author as={Link} to={`/users/${username}`}>
                    {username}
                </Comment.Author>
                <Comment.Metadata>
                    {moment(createdAt).fromNow()}
                </Comment.Metadata>
                <Comment.Text>{body}</Comment.Text>
                <Comment.Actions>
                    {user && user.username === username && (
                        <Comment.Action onClick={handleDelete}>
                            Delete
                        </Comment.Action>
                    )}
                </Comment.Actions>
            </Comment.Content>
        </Comment>
    )
}

export default Commentary
