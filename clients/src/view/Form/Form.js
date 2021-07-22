import { Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import React from 'react'
import UserForm from './UserForm'

const useStyles = makeStyles (theme => ({
    pageContain :{
        margin : '40px',
        padding: '24px'
    }
}))

const Form = () => {
    const classes = useStyles()
    return (
        <>
        <Paper className={classes.pageContain}>
        <UserForm />
        </Paper>
        </>
    )
}

export default Form
