import React, {FC, SetStateAction} from "react";
import {AncmntAutoForm} from "./AncmntAutoForm";
import {prepareCreateAncmnt} from "@root/src/helpers";
import {CreateAncmntFields, CreateAncmntState} from "@root/interfaces/Announcement";
import {AccordionComponent} from "./accordion_component/AccordionComponent";
import {Auto_icon} from '@src/components/elements/icons';
import {WithT} from "i18next";


type AncmntAutoFormPropsTypes = {
    createAncmnt: CreateAncmntState;
    values: CreateAncmntFields;
    setValues: (values: SetStateAction<CreateAncmntFields>, shouldValidate?: boolean | undefined) => any;
} & WithT;

export const AncmntAutoFormContainer: FC<AncmntAutoFormPropsTypes> = (props) => {
    const {t, createAncmnt, values} = props;
    const {adParams} = values;
    const data = prepareCreateAncmnt(createAncmnt.subCategory.data, adParams);
    console.log(data)

    const autoData = {
        automobile: {
            icon: Auto_icon,
            manufacturer: data.manufacturer,
            models: data.models,
            body: data.body,
            transmission: data.transmission,
            drive: data.drive,
            car_engine_capacity: data.car_engine_capacity,
            car_engine_type: data.car_engine_type
        }
    };

    const form = Object.keys(autoData).map((key, i) => {
        return <AccordionComponent
            key={i}
            title={t(key)}
            icon={autoData[key].icon}
        />
    });

    return (
        <AncmntAutoForm
            {...props}
            form={form}
        />
    )
};