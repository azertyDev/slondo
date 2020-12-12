import React, {FC} from "react"
import {WithT} from "i18next";
import {TopHeader} from "./TopHeader"


export type TopHeaderPropsType = {
    handleOpenModal: () => void;
} & WithT;

const TopHeaderContainer: FC<TopHeaderPropsType> = (props) => {
    const {t, handleOpenModal} = props;
    return <TopHeader t={t} handleOpenModal={handleOpenModal}/>
};

export default TopHeaderContainer