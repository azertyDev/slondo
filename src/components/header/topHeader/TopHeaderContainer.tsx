import React from "react"
import {TopHeader} from "./TopHeader"

const TopHeaderContainer = (props) => {
    const {t, handleOpenModal} = props;
    return (
        <TopHeader t={t} handleOpenModal={handleOpenModal}/>
    )
};

export default TopHeaderContainer