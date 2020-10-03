import React from 'react'
import {TopHeader} from "./topHeader/TopHeader"
import BottomHeader from "./bottomHeader/BottomHeader"
import {Container} from "@material-ui/core"
import {useStyles} from './useStyles'


export const Header = () => {
    const classes = useStyles();
    return (
        <header className={classes.root}>
            <Container maxWidth="lg">
                <TopHeader/>
                <div className={classes.bottomHeaderWrapper}>
                    <BottomHeader/>
                </div>
            </Container>
        </header>
    )
}
