import {FC, ReactNode} from 'react';
import {useStyles} from './useStyles';
import {WithT} from 'i18next';

export type UserProfilePropsType = {
    postCards: ReactNode;
} & WithT;

export const UserProfile: FC<UserProfilePropsType> = (props) => {
    const {t, postCards} = props;

    const classes = useStyles();
    return (
        <div className={classes.root}>
            {postCards}
        </div>
    );
};
