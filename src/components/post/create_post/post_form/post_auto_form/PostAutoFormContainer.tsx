import React, {FC, SetStateAction} from "react";
import {PostAutoForm} from "./PostAutoForm";
import {CreatePostProps, CreatePostState} from "@root/interfaces/Post";
import {AccordionComponent} from "./accordion_component/AccordionComponent";
import {Auto_icon} from '@src/components/elements/icons';
import {WithT} from "i18next";


type AncmntAutoFormPropsTypes = {
    createAncmnt: CreatePostState;
    values: CreatePostProps;
    setValues: (values: SetStateAction<CreatePostProps>, shouldValidate?: boolean | undefined) => any;
} & WithT;

export const PostAutoFormContainer: FC<any> = (props) => {
    const {t, createAncmnt, values} = props;
    const {postParams} = values;
    // prepareCrtPostData(createAncmnt.car.model, postParams);

    // const autoData = {
    //     automobile: {
    //         icon: Auto_icon,
    //         manufacturer: data.manufacturer,
    //         models: data.models,
    //         body: data.body,
    //         transmission: data.transmission,
    //         drive: data.drive,
    //         car_engine_capacity: data.car_engine_capacity,
    //         car_engine_type: data.car_engine_type
    //     }
    // };

    // const form = Object.keys(autoData).map((key, i) => {
    //     return <AccordionComponent
    //         key={i}
    //         title={t(key)}
    //         icon={autoData[key].icon}
    //     />
    // });

    return (
        <PostAutoForm
            {...props}
            // form={form}
        />
    )
};
