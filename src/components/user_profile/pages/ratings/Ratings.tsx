import {FC} from 'react';
import {useStyles} from './useStyles';
import {WithT} from 'i18next';

export const UserRatings: FC<WithT> = (props) => {
    const {t} = props;

    const classes = useStyles();
    return (
        <div className={classes.root}>
            UserRatings
        </div>
    );
};
