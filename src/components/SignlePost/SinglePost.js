import React, { useState } from 'react'
import {
    Card,
    Feed,
    Image,
    Label,
    Button,
    Icon,
    Comment,
    Loader,
    Popup,
    Modal,
} from 'semantic-ui-react'
import { Link, useHistory } from 'react-router-dom'
import moment from 'moment'

import Commentary from 'components/Commentary/Commentary'
import LikeButton from 'components/LikeButton/LikeButton'
import DeleteButton from 'components/DeleteButton/DeleteButton'
import LeaveCommentForm from 'components/LeaveCommentForm/LeaveCommentForm'

import './singlePost.css'

function SignlePost(props) {
    const {
        description,
        image,
        createdAt,
        tags,
        _id,
        username,
        likeCount,
        commentsCount,
        likes,
    } = props.post

    const profilePic = props.profilePic
    const comments = props.comments
    const commentators = props.commentators
    const history = useHistory()
    const user = JSON.parse(localStorage.getItem('profile'))
    const id = _id

    const [open, setOpen] = useState(false)

    const errorModal = (
        <Modal
            basic
            onClose={() => {
                setOpen(false)
                history.push('/feed')
            }}
            onOpen={() => setOpen(true)}
            open={open}
            size="small"
            trigger={<Button>Basic Modal</Button>}
        >
            <Modal.Content>
                <p>Unable to find the post you're looking for.</p>
            </Modal.Content>
            <Modal.Actions>
                <Button
                    primary
                    inverted
                    onClick={() => {
                        setOpen(false)
                        history.push('/feed')
                    }}
                >
                    <Icon name="checkmark" /> Ok
                </Button>
            </Modal.Actions>
        </Modal>
    )

    const postCard = (
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
                            <Label
                                as={Link}
                                to={`/tags/${tag}`}
                                style={{ margin: 2 }}
                            >
                                {tag}
                            </Label>
                        )
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
                    trigger={
                        <Button
                            basic
                            size="medium"
                            className="tertiary"
                            style={{ paddingLeft: 10, paddingRight: 10 }}
                            onClick={() => {
                                navigator.clipboard.writeText(image)
                            }}
                        >
                            <Icon name="share" />
                            Get link
                        </Button>
                    }
                    content="Copied to the clipboard"
                    on="click"
                    hideOnScroll
                    size="tiny"
                />

                {user && user.username === username && (
                    <DeleteButton postId={id} />
                )}
            </Card.Content>
            <Card.Content>
                <Comment.Group>
                    {commentators && comments ? (
                        comments.map((comment) => (
                            <Commentary
                                user={user}
                                id={id}
                                comment={comment}
                                profilePic={
                                    commentators.find(
                                        (commentator) =>
                                            commentator.commentator ===
                                            comment.username,
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
    )

    return id ? postCard : errorModal
}
export default SignlePost
