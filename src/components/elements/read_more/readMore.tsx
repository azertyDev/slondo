import {FC, useEffect, useState} from 'react';
import {Typography} from '@material-ui/core';
import {CustomButton} from '@src/components/elements/custom_button/CustomButton';
import {useTranslation} from 'next-i18next';
import {useStyles} from './useStyles';

type ReadMoreTypeProps = {
    threshold?: number,
    id?: string
};

export const ReadMore: FC<ReadMoreTypeProps> = ({threshold = 55, id, children}) => {
    const {t} = useTranslation('common');
    const [isHidden, setIsHidden] = useState(true);
    const [descHeight, setDescHeight] = useState(0);

    useEffect(() => {
        setDescHeight(document.getElementById(id ?? 'description').clientHeight);
    }, [children]);
    
    const classes = useStyles(threshold + 1);
    return (
        <div className={classes.root}>
            <div
                id={id ?? 'description'}
                className={isHidden ? classes.hidden : ''}
            >
                {children}
            </div>
            {descHeight > threshold && (
                <CustomButton
                    disableRipple
                    className='show-more-button'
                    onClick={() => setIsHidden(!isHidden)}
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
};