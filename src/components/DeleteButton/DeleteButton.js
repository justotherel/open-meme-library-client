import React, { useState } from 'react'
import { Button, Confirm, Loader, Modal } from 'semantic-ui-react'
import { useDispatch } from 'react-redux'

import { deletePost } from 'actions/posts.actions'

function DeleteButton({ postId, callback }) {
    const [confirmOpen, setConfirmOpen] = useState(false)
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)

    const handleDelete = () => {
        setLoading(true)
        setConfirmOpen(false)
        dispatch(deletePost(postId)).then({ loading: false })
    }

    const loadingScreen = (
        <Modal basic open={loading} size="fullscreen">
            <Loader size="massive">Loading...</Loader>
        </Modal>
    )

    const likeBtn = loading ? (
        <>{loadingScreen}</>
    ) : (
        <>
            <Button
                basic
                size="medium"
                floated="right"
                className="tertiary delete-btn"
                style={{ padding: 10 }}
                onClick={() => setConfirmOpen(true)}
            >
                Delete
            </Button>
            <Confirm
                open={confirmOpen}
                onCancel={() => setConfirmOpen(false)}
                onConfirm={handleDelete}
            />
        </>
    )

    return <>{likeBtn}</>
}

export default DeleteButton
