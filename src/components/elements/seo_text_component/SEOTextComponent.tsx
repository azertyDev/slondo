import {FC} from 'react';
import {Box} from '@material-ui/core';
import {ReadMore} from '@src/components/elements/read_more/readMore';
import {useStyles} from './useStyles';

export const SEOTextComponent: FC<{ text: string }> = ({text}) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <ReadMore threshold={53}>
                <Box
                    component='p'
                    fontSize='0.875rem'
                >
                    {text}
                </Box>
            </ReadMore>
        </div>
    );
};