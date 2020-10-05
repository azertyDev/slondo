import React from 'react'
import {useSelector} from 'react-redux'
import {TopHeaderContainer} from "./topHeader/TopHeaderContainer"
import BottomHeader from "./bottomHeader/BottomHeader"
import {Container} from "@material-ui/core"
import {useStyles} from './useStyles'


export const Header = () => {
    const {header} = useSelector(({localization}) => localization);
    const classes = useStyles();
    return (
        <header className={classes.root}>
            <Container maxWidth="lg">
                <TopHeaderContainer local={header.topHeader}/>
                <div className={classes.bottomHeaderWrapper}>
                    <BottomHeader/>
                </div>
            </Container>
        </header>
    )
};
