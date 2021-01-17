import React, {FC} from 'react';
import {Grid, Typography, ButtonBase} from '@material-ui/core';
import {useStyles} from './useStyles';
import {AncmntType} from "@root/interfaces/Announcement";


type AncmntTypesPageProps = {
    ancmntTypes: AncmntType[];
    handleAncmntType: (ancmntType) => () => void;
};

export const AncmntTypesPage: FC<AncmntTypesPageProps> = ({ancmntTypes, handleAncmntType}) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={2}>
                {ancmntTypes.map((anType, i) => {
                    return (
                        <Grid item xs={4} key={i}>
                            <ButtonBase
                                onClick={handleAncmntType(anType)}
                                style={{backgroundImage: `url(${anType.image.url})`}}
                            >
                                <div>
                                    <Typography variant="subtitle1">{anType.name}</Typography>
                                    <Typography variant="body2">
                                        Размещайте товары или услуги совершенно бесплатно
                                    </Typography>
                                </div>
                            </ButtonBase>
                        </Grid>
                    )
                })}
            </Grid>
        </div>
    );
};
