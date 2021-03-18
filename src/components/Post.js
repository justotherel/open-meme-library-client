import React, {useContext} from 'react'
import {Card, Icon, Label, Image, Button} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import moment from 'moment'

// import {AuthContext} from '../context/auth'
// import LikeButton from './LikeButton'
// import DeleteButton from './DeleteButton'
 
function Post({post: {description, image, createdAt, tags, id, username, likeCount, commentCount, likes}}) {
    
    // const {user} = useContext(AuthContext)

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
                {/* <LikeButton user={user} post={{id, likes, likeCount}}/> */}
                <Button basic size='medium' className="tertiary" style={{paddingLeft: 10, paddingRight: 10 }}>
                    <Icon name='comment outline'/>
                    {commentCount}
                </Button>
                {/* {user && user.username === username && (<DeleteButton postId={id}/>)} */}
            </Card.Content>
        </Card>
    )
}

export default Post