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
                        </Typography>
                        : <Typography variant='subtitle1'>
                            {t('hide')}
                        </Typography>}
                </CustomButton>
            )}
        </div>
    );
}