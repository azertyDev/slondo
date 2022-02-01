import {FC} from 'react';
import {useTranslation} from 'react-i18next';
import {Typography} from '@material-ui/core';
import {useStyles} from './useStyles';
import {TurboRocket} from '@src/assets/icons';

export const TurboSticker: FC<{className?: string}> = ({className = ''}) => {
    const {t} = useTranslation();
    const classes = useStyles();
    return (
        <div className={`${classes.root} ${className}`}>
            <Typography>{t('turbo')}</Typography>
        </div>
    );
};
