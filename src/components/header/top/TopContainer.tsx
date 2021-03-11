import React, {FC} from "react"
import {WithT} from "i18next";
import {Top} from "./Top"


export type TopHeaderPropsType = {
    handleOpenModal: () => void;
} & WithT;

const TopContainer: FC<TopHeaderPropsType> = (props) => {
    const {t, handleOpenModal} = props;
    return <Top t={t} handleOpenModal={handleOpenModal}/>
};

export default TopContainer;