import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Icon } from 'semantic-ui-react'
import { useDispatch, useSelector } from 'react-redux'

import { likePost } from 'actions/posts.actions'

function LikeButton({ id, likes, likeCount }) {
    const dispatch = useDispatch()

    const user = JSON.parse(localStorage.getItem('profile'))

    // const [likes, setLikes] = useState(_likes)
    const [liked, setLiked] = useState(false)
    // const [likeCount, setLikeCount] = useState(_likeCount)

    const Likes =
        user && likes.find((like) => like.username === user.username) ? (
            <>
                <Button
                    basic
                    size="medium"
                    className="tertiary"
                    style={{ paddingLeft: 10, paddingRight: 10 }}
                    onClick={() => dispatch(likePost(id))}
                >
                    <Icon name="heart" color="red" />
                    {likeCount}
                </Button>
            </>
        ) : (
            <Button
                basic
                size="medium"
                className="tertiary"
                style={{ paddingLeft: 10, paddingRight: 10 }}
                onClick={() => dispatch(likePost(id))}
            >
                <Icon name="heart outline" />
                {likeCount}
            </Button>
        )
        
    return user ? (
        Likes
    ) : (
        <Button
            as={Link}
            to="/login"
            basic
            size="medium"
            className="tertiary"
            style={{ paddingLeft: 10, paddingRight: 10 }}
        >
            <Icon name="heart outline" />
            {likeCount}
        </Button>
    )
}

export default LikeButton
