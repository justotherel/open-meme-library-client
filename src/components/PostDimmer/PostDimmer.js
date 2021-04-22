import React from 'react'
import {
    Dimmer,
    Loader,
    Card,
    Feed,
    Image,
    Segment,
} from 'semantic-ui-react'

import shortP from 'images/short-paragraph.png'
import mediaP from 'images/media-paragraph.png'
import image from 'images/image.png'

function PostDimmer() {

    const loading = (
        <Card style={{ width: 500, marginTop: 15 }}>
            <Card.Content>
                <Feed>
                    <Feed.Event>
                        <Feed.Content>
                            <Image src={mediaP} alt="dimmer" size="small" />
                        </Feed.Content>
                    </Feed.Event>
                </Feed>
            </Card.Content>
            <Dimmer.Dimmable as={Segment}>
                <Dimmer active={true} inverted>
                    <Loader size="massive" inverted></Loader>
                </Dimmer>
                <Image src={image} wrapped />
            </Dimmer.Dimmable>
            <Card.Content>
                <Card.Description>
                    <p>
                        <Image src={shortP} />
                    </p>
                </Card.Description>
            </Card.Content>
        </Card>
    )

    return (
        loading
    )
}

export default PostDimmer
