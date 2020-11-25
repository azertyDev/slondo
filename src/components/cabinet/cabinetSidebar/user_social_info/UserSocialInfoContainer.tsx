import React from 'react';
import { Grid } from '@material-ui/core';
import { UserSocialInfo } from './UserSocialInfo';
import { CabinetMenuWrapper } from '@src/components/cabinet/CabinetMenuWrapper';

export const UserSocialInfoContainer = (props) => {
    const title = 'Подписчики';
    
    return (
        <>
            <CabinetMenuWrapper headerTitle={title} title={title} t={props.t}>
                <Grid item xs={9}>
                    <UserSocialInfo t={props.t} />
                </Grid>
            </CabinetMenuWrapper>
        </>
    );
};
