import {FC} from 'react';
import {Grid} from '@material-ui/core';
import {UserInfoWithAvatar} from '@src/components/elements/user_info_with_avatar/UserInfoWithAvatar';
import {SubscriberType} from '@root/interfaces/Auth';
import {useStyles} from './useStyles';

export const SubsItem: FC<SubscriberType> = ({user}) => {
    const classes = useStyles();
    return (
        <Grid
            item
            xs={12}
            container
            alignItems='center'
            className={classes.root}
            justifyContent='space-between'
        >
            <Grid item xs={6}>
                <UserInfoWithAvatar user={user}/>
            </Grid>
        </Grid>
    );
};