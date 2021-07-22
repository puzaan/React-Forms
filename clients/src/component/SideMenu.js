import React from 'react'
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
    sideMenus :{
        display: 'flex',
        flexDirection:'column',
        position:'absolute',
        left: '0px',
        width:'320px',
        height: '100%',
        backgroundColor: '#253053'
    }
}));

const SideMenu = () => {
    const classes = useStyles();
    
    return (
        <>
        <div className={classes.sideMenus}>
            
        </div>
        </>
    )
}

export default SideMenu