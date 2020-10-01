import React from 'react'
import {TopHeader} from "./topHeader/TopHeader"
import BottomHeader from "./bottomHeader/BottomHeader"
import {useStyles} from './useStyle'
import {Container} from "@material-ui/core"


export const Header = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Container maxWidth="lg">
                <div className='top'>
                    <TopHeader/>
                </div>
                <div className='bottom'>
                    <BottomHeader/>
                </div>
            </Container>
        </div>
    )
}
