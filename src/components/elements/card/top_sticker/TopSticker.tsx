import {FC} from 'react';
import {useTranslation} from 'react-i18next';
import {Typography} from '@material-ui/core';

export const TopSticker: FC<{className?: string}> = ({className = ''}) => {
    const {t} = useTranslation();
    return (
        <div
            className={className}
            style={{
                padding: '4px 20px',
                background:
                    'linear-gradient(90.62deg, #F38522 0.56%, #FFB800 99.49%)'
            }}
        >
            <Typography
                style={{color: '#fff', fontSize: '.75rem', fontWeight: 700}}
            >
                {t('top')}
            </Typography>
        </div>
    );
};
