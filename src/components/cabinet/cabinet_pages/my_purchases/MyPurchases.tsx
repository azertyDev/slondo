import {FC} from 'react';
import {useStyles} from './useStyles';


export const MyPurchases: FC = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            My Purchases
        </div>
    );
};