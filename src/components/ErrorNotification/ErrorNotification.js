import { HIDE_ERROR } from 'constants/actionTypes'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Label } from 'semantic-ui-react'

const ErrorNotification = (props) => {
    const isOpen = useSelector((state) => state.errorReducer.isOpen)
    const error = useSelector((state) => state.errorReducer.error)

    console.log(`isOpen ${isOpen}, error ${error.error}`)

    const dispatch = useDispatch()

    function handleClose() {
        dispatch({ type: HIDE_ERROR })
    }

    return (
        <>
            {isOpen && error && (
                <Label pointing color="red">
                    {error.error}
                </Label>
            )}
        </>
    )
}

export default ErrorNotification
