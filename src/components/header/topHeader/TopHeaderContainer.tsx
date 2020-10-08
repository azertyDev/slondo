import React from "react"
import {TopHeader} from "./TopHeader"

const TopHeaderContainer = (props) => {
    const {t} = props;
    return (
        <TopHeader t={t}/>
    )
};

export default TopHeaderContainer