import React from 'react'
import {Card, Icon, Label, Image, Button} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import moment from 'moment'


import LikeButton from './Buttons/LikeButton'
import DeleteButton from './Buttons/DeleteButton'
 
function Post({post: {description, image, createdAt, tags, _id, username, likeCount, commentsCount, likes}}) {
    
    const user = JSON.parse(localStorage.getItem('profile'))
    const id = _id

    return (
        <Card fluid>
            <Image src={image} wrapped ui={false} as={Link} to={`/posts/${id}`}  />
            <Card.Content>
                <Card.Header>{description}</Card.Header>
                <Card.Meta as={Link} to={`/posts/${id}`}>
                    <span className='date'>{moment(createdAt).fromNow()}</span>
                </Card.Meta>
                <Card.Description>
                    {tags.map(function(tag){ return <Label style={{margin: 2}}>{tag}</Label>})}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <LikeButton id={id} likeCount={likeCount} likes={likes}/>
                <Button basic size='medium' className="tertiary" style={{paddingLeft: 10, paddingRight: 10 }}>
                    <Icon name='comment outline'/>
                    {commentsCount}
                </Button>
                    {user && user.username === username  && (<DeleteButton postId={id}/>)}
            </Card.Content>
        </Card>
    )
}

export default Post