import React, {Dispatch, FC, SetStateAction} from 'react';
import {Grid, Typography, ButtonBase} from '@material-ui/core';
import {useStyles} from './useStyles';
import {AncmntTypesState} from "@root/interfaces/Announcement";


type AncmntTypesPageProps = {
    ancmntTypes: AncmntTypesState;
    setAncmntType: Dispatch<SetStateAction<AncmntTypesState>>;
};

export const AncmntTypesPage: FC<AncmntTypesPageProps> = ({ancmntTypes, setAncmntType}) => {

    const handleSetAncmntType = (ancmntType) => () => {
        setAncmntType(ancmntType);
    };

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={2}>
                {ancmntTypes.ancmnts.map((anType, i) => {
                    return (
                        <Grid item xs={4} key={i}>
                            <ButtonBase
                                onClick={handleSetAncmntType(anType)}
                                style={{backgroundImage: `url(${anType.image.url})`}}
                            >
                                <div>
                                    <Typography variant="subtitle1">Объявление</Typography>
                                    <Typography variant="body2">
                                        Размещайте товары или услуги совершенно бесплатно
                                    </Typography>
                                </div>
                                {/*<ButtonComponent>*/}
                                {/*    Создать объявление*/}
                                {/*</ButtonComponent>*/}
                            </ButtonBase>
                        </Grid>
                    )
                })}
            </Grid>
        </div>
    );
};
