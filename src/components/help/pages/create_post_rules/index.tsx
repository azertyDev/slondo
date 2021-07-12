import {useState} from 'react';
import {Grid} from '@material-ui/core';
import {useStyles} from './useStyles';
import Link from 'next/link';

export const CreatePostRules = () => {
    const [show, setShow] = useState(false);

    const handleClick = () => {
        setShow(!show);
    };
    const classes = useStyles();
    return (
        <>
            <Grid item xs={6}>
                CreatePostRules
            </Grid>
        </>
    );
};

export default CreatePostRules;