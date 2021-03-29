import React from 'react'
import { Container, Grid } from 'semantic-ui-react'

import AuthForm from 'components/AuthForm/AuthForm'
import './authPage.css'

function Auth() {
    return (
        <Grid columns={2} relaxed className="text-style">
            <Grid.Row columns={2}>
                <Grid.Column textAlign="center" style={{ marginTop: 20 }}>
                    <Container style={{ width: 400 }}>
                        <h1>Open Meme Library</h1>
                        <p>
                            Revolution is a manifestation of the unknown. You
                            may call it good or evil, according as you aspire to
                            the future or cling to the past; but leave it to its
                            authors. It would seem to be the joint product of
                            great events and great individualities, but is in
                            reality the result of events alone. Events plan the
                            expenditures for which men pay the bills. Events
                            dictate, men sign. The 14th of July was signed by
                            Camille Desmoulins, the 10th of August by Danton,
                            the 2d September by Marat, the 21st of September by
                            Grégoire, and the 21st of January by Robespierre;
                            but Desmoulins, Danton, Marat, Grégoire, and
                            Robespierre are merely clerks. The majestic and
                            mysterious compiler of those grand pages was
                            Almighty God, wearing the mask of destiny.
                            Robespierre believed in God,—he did indeed.
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
