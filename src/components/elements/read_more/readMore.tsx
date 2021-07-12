import {FC, useState} from 'react';
import {Typography} from '@material-ui/core';
import {CustomButton} from '@src/components/elements/custom_button/CustomButton';
import {useStyles} from './useStyles';
import {useTranslation} from 'next-i18next';

type ReadMoreTypeProps = {
    descHeight: number,
    heightLimit: number
};

export const ReadMore: FC<ReadMoreTypeProps> = ({descHeight, heightLimit, children}) => {
    const {t} = useTranslation('common');
    const [isHidden, setIsHidden] = useState(true);

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={isHidden ? classes.hidden : ''}>{children}</div>
            {descHeight >= heightLimit && (
                <CustomButton
                    disableRipple
                    onClick={() => setIsHidden(!isHidden)}
                    className='show-more-button'
                >
                    {isHidden
                        ? <Typography variant='subtitle1'>
                            {t('showMore')}
                            <svg width="13" height="6" viewBox="0 0 13 6" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 0H13L6.5 6L0 0Z" fill="#675EAA"/>
                            </svg>
                        </Typography>
                        : <Typography variant='subtitle1'>
                            {t('hide')}
                            <svg width="13" height="6" viewBox="0 0 13 6" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M13 6H0L6.5 0L13 6Z" fill="#675EAA"/>
                            </svg>
                        </Typography>}
                </CustomButton>
            )}
        </div>
    );
}