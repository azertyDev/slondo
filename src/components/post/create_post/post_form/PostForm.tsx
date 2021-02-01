import React, {FC} from 'react';
import {Grid, TextField, Typography} from '@material-ui/core';
import {ButtonComponent} from "@src/components/elements/button/Button";
import {CustomMenu} from "@src/components/elements/custom_menu/CustomMenu";
import {PostAutoFormContainer} from "@src/components/post/create_post/post_form/post_auto_form/PostAutoFormContainer";
import {WithT} from "i18next";
import {CreatePostProps} from "@root/interfaces/Post";
import {SecLvlCtgrType} from "../post_form/PostFormContainer";
import {DataForCrtPostType} from "../CreatePostContainer";
import {PostParams} from "./components/post_params/PostParams";
import {Header} from './components/header/Header';
import {AuctionParams} from "./components/auction_params/AuctionParams";
import {PaymentDelivery} from "./components/payment_delivery/PaymentDelivery";
import {Location} from './components/location/Location';
import {Photos} from "./components/photos/Photos";
import {Description} from './components/description/Description';
import {Contacts} from './components/contacts/Contacts';
import {useStyles} from './useStyles';
import {AvailableDays} from "./components/available_days/AvailableDays";


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
    secCtgr: SecLvlCtgrType
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
        secCtgr,
    } = props;

    const {defaultParams, postParams, auction} = values;
    const {avalTime} = defaultParams;

    const isPreview = activeStep === 3;
    const isAuction = postType.name === 'auc' || postType.name === 'exauc';

    const classes = useStyles();
    return (
        // mark === 'car'
        //     ? <PostAutoFormContainer {...props}/>
        <div className={classes.root}>
            <div className='header-wrapper'>
                <Header
                    postType={postType}
                    category={category}
                    secCtgr={secCtgr}
                    errors={errors}
                    touched={touched}
                    isPreview={isPreview}
                    handleInput={handleInput}
                    defaultParams={defaultParams}
                />
            </div>
            {!!Object.keys(dataForCrtPost.data).length
            && <div className='post-params-wrapper'>
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
            </div>}
            {category.mark !== 'free'
            && <>
                {isAuction
                    ? <div>
                        <AuctionParams
                            auction={auction}
                            errors={errors}
                            touched={touched}
                            postType={postType}
                            isPreview={isPreview}
                            handleBlur={handleBlur}
                            handleInput={handleInput}
                            defaultParams={defaultParams}
                            handleMenuItem={handleMenuItem}
                            handleCheckboxChange={handleCheckboxChange}
                        />
                    </div>
                    : <div>
                        <Typography variant="subtitle1">
                            <strong>
                                Цена
                                {!isPreview
                                && <span className='error-text'>*</span>}
                            </strong>
                            {errors.price
                            && touched.price
                            && <span className='error-text'> {errors.price}</span>}
                        </Typography>
                        {isPreview
                            ? <Typography>
                                {`${defaultParams.price} ${defaultParams.currency.name}.`}
                            </Typography>
                            : <Grid container>
                                <Grid item xs={3}>
                                    <TextField
                                        fullWidth
                                        variant='outlined'
                                        value={defaultParams.price ?? ''}
                                        className={errors.price && touched.price
                                            ? 'error-border'
                                            : ''}
                                        name='price'
                                        onChange={handleInput}
                                    />
                                </Grid>
                                <CustomMenu
                                    name='currency'
                                    valueName={
                                        defaultParams.currency
                                            ? defaultParams.currency.name
                                            : 'Не выбрано'}
                                    items={postType.currency}
                                    onClick={handleMenuItem('currency')}
                                    onBlur={handleBlur}
                                />
                            </Grid>
                        }
                    </div>
                }
            </>}
            <div>
                <PaymentDelivery
                    isPreview={isPreview}
                    handleCheckboxChange={handleCheckboxChange}
                    defaultParams={defaultParams}
                />
            </div>
            <div className='location-wrapper'>
                <Location
                    isPreview={isPreview}
                    errors={errors}
                    touched={touched}
                    handleBlur={handleBlur}
                    handleLocation={handleLocation}
                    locations={locations}
                />
            </div>
            <div>
                <Photos
                    isPreview={isPreview}
                    errors={errors}
                    touched={touched}
                    values={values}
                    setValues={setValues}
                />
            </div>
            <div>
                <Description
                    errors={errors}
                    touched={touched}
                    isPreview={isPreview}
                    handleInput={handleInput}
                    handleBlur={handleBlur}
                    defaultParams={defaultParams}
                />
            </div>
            <Grid
                item
                container
                justify='space-between'
                spacing={1}
            >
                <Grid item xs={6}>
                    <Contacts
                        isPreview={isPreview}
                        isAuction={isAuction}
                        auction={auction}
                        handleCheckboxChange={handleCheckboxChange}
                        defaultParams={defaultParams}
                        handleInput={handleInput}
                    />
                </Grid>
                {
                    !isAuction
                    && <Grid item xs={6}>
                        {(isPreview && avalTime.isActive || !isPreview)
                        && <AvailableDays
                            isPreview={isPreview}
                            avalTime={avalTime}
                            handleTime={handleTime}
                            handleBlur={handleBlur}
                            handleSwitch={handleSwitch}
                            handleAvalDays={handleAvalDays}
                        />}
                    </Grid>
                }
            </Grid>
            <div className='next-button-wrapper'>
                <ButtonComponent
                    type='submit'
                    disabled={values.isFetch}
                    className='nav-button'
                >
                    <Typography>
                        {isPreview ? 'Создать' : 'Далее'}
                    </Typography>
                </ButtonComponent>
            </div>
        </div>
    )
};