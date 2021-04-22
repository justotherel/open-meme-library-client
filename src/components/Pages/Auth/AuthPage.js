import React from 'react'
import { Container, Grid } from 'semantic-ui-react'

import AuthForm from 'components/AuthForm/AuthForm'
import './authPage.css'

function Auth() {
    return (
        <Grid columns={2} relaxed className="text-style">
            <Grid.Row columns={2}>
                <Grid.Column textAlign="left" style={{ marginTop: 20 }}>
                    <Container style={{ width: 400 }}>
                        <h1>Open Meme Library</h1>
                        <p>
                            This is Koil speaking. You’re done buddy, thats it,
                            finito, hasta la vista. We gave you a chance and you
                            shitted and cummed all over it. Please exit the game
                            and throw away your computer. We asked for no meta,
                            and you did it anyway. See you on Zelda buddy
                        </p>
                        <p>
                            You wanna call me a metagamer? Listen you are a
                            fucking braindead neanderthal, alright? You are
                            literally a fucking idiot, you are jumping from some
                            guys stream to complain about something that nobody
                            did for somebody that doesn't even know you fucking
                            exist. You are a sad fucking idiot dude, you are the
                            saddest fucking human being, literally, you are a
                            sad peice of shit, I feel bad for you. I think you
                            are a fucking moron.
                        </p>
                        <p>
                            BLANKIES what a fucking tired dude, what a fucking
                            WEASELLY little, TIRED dude, what a fucking weaselly
                            little TIRED dude, holy shit dude. holy fucking shit
                            dude. literally tired! BLANKIES
                        </p>
                    </Container>
                </Grid.Column>
                <Grid.Column>
                    <AuthForm />
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}

export default Auth
