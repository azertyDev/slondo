import {FC} from 'react';
import {Box} from '@material-ui/core';
import {useTranslation} from 'next-i18next';
import {useStyles} from './useStyles';

export const MobileWrapper: FC = ({children}) => {
    const {t} = useTranslation('post');

    const classes = useStyles();
    return (
        <Box>
            {children}
        </Box>
    );
};