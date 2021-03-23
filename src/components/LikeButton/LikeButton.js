import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Icon } from 'semantic-ui-react'
import {useDispatch} from 'react-redux'

import {likePost} from 'actions/posts.actions'

function LikeButton({ id, likeCount, likes }) {

    const dispatch = useDispatch()
    const [liked, setLiked] = useState(false)
    const user = JSON.parse(localStorage.getItem('profile'))

    useEffect(() => {
        if (user && likes.find((like) => like.username === user.username)) {
        setLiked(true)
        } else setLiked(false);
    }, [user, likes])

    const handleLike = () => {
        dispatch(likePost(id))
    }

    const likeBtn = user ? (liked ? 
        (
        <Button basic size='medium' className="tertiary" style={{paddingLeft: 10, paddingRight: 10 }} onClick={handleLike}>
            <Icon name="heart" color="red" />
            {likeCount}
        </Button>
        ) : 
        (   
        <Button basic size='medium' className="tertiary" style={{paddingLeft: 10, paddingRight: 10 }} onClick={handleLike}>
            <Icon name="heart outline"/>
            {likeCount}
        </Button>
        )
    ) : 
    (
        <Button as={Link} to="/login" basic size='medium' className="tertiary" style={{paddingLeft: 10, paddingRight: 10 }} onClick={likePost}>
            <Icon name="heart outline"/>
            {likeCount}
        </Button>
    )

    return (
        <>
        {likeBtn}
        </>
    )
}

export default LikeButton
