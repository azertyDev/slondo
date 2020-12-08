import React from 'react';
import { LotInfo } from '@src/components/advertisement/show_advertisement/rightSide/lotInfo/LotInfo';
import { UserInfo } from '@src/components/advertisement/show_advertisement/rightSide/userinfo/UserInfo';

// styles
import { useStyles } from './useStyles';

export const RightSide = (props) => {
    const { adData } = props;

    const classes = useStyles();
    return (
        <div className={classes.root}>
            {adData.data.ads_type.mark !== 'regular' && <LotInfo {...props} />}
            <UserInfo {...adData} />
        </div>
    );
};
