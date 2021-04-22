import React from 'react'
import { Container, Icon, Reveal, Image } from 'semantic-ui-react'

function Thumbnail(props) {

    const {image, likeCount, commentCount} = props
    

    return (
        <Reveal animated="fade">
            <Reveal.Content  visible>
                <Image 
                    src={image}
                    size="small"
                />
            </Reveal.Content>
            <Reveal.Content hidden>
                <Container textAlign='center' style={{backgroundImage: `url(${image})`}}>
                    <Icon name='heart'>{likeCount}</Icon>
                    <Icon name='comment'>{commentCount}</Icon>
                </Container>
            </Reveal.Content>
        </Reveal>
    )
}

export default Thumbnail
