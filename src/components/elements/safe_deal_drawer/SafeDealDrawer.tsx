import {FC} from 'react';
import {Container, Drawer} from '@material-ui/core';
import {useStyles} from './useStyles';

type SafeDealDrawerPropsType = {
    open: boolean,
    handleClose: () => void
};

export const SafeDealDrawer: FC<SafeDealDrawerPropsType> = (props) => {
    const {open, handleClose} = props;

    const classes = useStyles();
    return (
        <Drawer
            anchor='right'
            open={open}
            onClose={handleClose}
            className={classes.root}
        >
            <Container maxWidth='xl'>
            </Container>
        </Drawer>
    );
};
