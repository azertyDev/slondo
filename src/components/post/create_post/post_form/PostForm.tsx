import React, {FC} from 'react';
import {WithT} from "i18next";
import {CreatePostProps} from "@root/interfaces/Post";
import {DataForCrtPostType} from "./PostFormContainer";
import {PostParams} from "./post_params/PostParams";
import {Photos} from "./photos/Photos";
import {AccordionComponent} from "@src/components/post/create_post/post_form/post_auto_form/accordion_component/AccordionComponent";
import {PriceDescContacts} from "@src/components/post/create_post/post_form/price_desc_contacts/PriceDescContacts";
import {useStyles} from './useStyles';


type PostFormProps = {
    activeStep: number;
    locations,
    postType,
    category,
    mark: string;
    values: CreatePostProps;
    setValues,
    touched,
    errors,
    handleTime,
    handleBlur,
    handleSwitch,
    handleAvalDays,
    handleLocation,
    handleMenuItem,
    handleListItem,
    handleInput,
    handleParamsCheckbox,
    handleCheckboxChange,
    dataForCrtPost: DataForCrtPostType,
}

export const PostForm: FC<PostFormProps & WithT> = (props) => {
    const {
        t,
        activeStep,
        locations,
        postType,
        category,
        mark,
        values,
        setValues,
        touched,
        errors,
        handleTime,
        handleLocation,
        handleBlur,
        handleSwitch,
        handleAvalDays,
        handleMenuItem,
        handleListItem,
        handleInput,
        handleParamsCheckbox,
        handleCheckboxChange,
        dataForCrtPost,
    } = props;

    const {defaultParams, postParams, auction} = values;
    const {avalTime} = defaultParams;

    const isPreview = activeStep === 3;
    const isAuction = postType.name === 'auc' || postType.name === 'exauc';

    const classes = useStyles();
    return (
        <div className={classes.root}>
            {!!Object.keys(dataForCrtPost.data).length
            && <div className='accordion-wrapper'>
                <AccordionComponent
                    isPreview={isPreview}
                    title={t('parameters')}
                    nextBlockTitle={t('appearance')}
                    icon='/icons/parameters.svg'
                >
                    <PostParams
                        t={t}
                        isPreview={isPreview}
                        onBlur={handleBlur}
                        errors={errors}
                        touched={touched}
                        handleInput={handleInput}
                        handleMenuItem={handleMenuItem}
                        handleListItem={handleListItem}
                        paramsByMark={postParams[mark]}
                        handleParamsCheckbox={handleParamsCheckbox}
                        dataForCrtPost={dataForCrtPost}
                    />
                </AccordionComponent>
            </div>}
            <div className='accordion-wrapper'>
                <AccordionComponent
                    isPreview={isPreview}
                    title={t('appearance')}
                    nextBlockTitle={t('priceDescContacts')}
                    icon='/icons/view.svg'
                >
                    <Photos
                        t={t}
                        isPreview={isPreview}
                        errors={errors}
                        touched={touched}
                        values={values}
                        setValues={setValues}
                    />
                </AccordionComponent>
            </div>
            <div className='accordion-wrapper'>
                <AccordionComponent
                    isPreview={isPreview}
                    title={t('priceDescContacts')}
                    nextBlockTitle={t('next')}
                    icon='/icons/info_icon.svg'
                >
                    <PriceDescContacts
                        t={t}
                        isPreview={isPreview}
                        isAuction={isAuction}
                        errors={errors}
                        touched={touched}
                        postType={postType}
                        category={category}
                        defaultParams={defaultParams}
                        auction={auction}
                        locations={locations}
                        avalTime={avalTime}
                        handleAvalDays={handleAvalDays}
                        handleBlur={handleBlur}
                        handleCheckboxChange={handleCheckboxChange}
                        handleInput={handleInput}
                        handleLocation={handleLocation}
                        handleMenuItem={handleMenuItem}
                        handleSwitch={handleSwitch}
                        handleTime={handleTime}
                    />
                </AccordionComponent>
            </div>
        </div>
    )
};