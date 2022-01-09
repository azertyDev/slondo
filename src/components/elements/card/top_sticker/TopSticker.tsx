import {FC} from 'react';
import {useTranslation} from 'react-i18next';
import {Typography} from '@material-ui/core';
import {useStyles} from './useStyles';

export const TopSticker: FC<{className?: string}> = ({className = ''}) => {
    const {t} = useTranslation();
    const classes = useStyles();
    return (
        <div className={`${classes.root} ${className}`}>
            <Typography
                style={{color: '#fff', fontSize: '.75rem', fontWeight: 700}}
            >
                {t('top')}
            </Typography>
        </div>
    );
};
