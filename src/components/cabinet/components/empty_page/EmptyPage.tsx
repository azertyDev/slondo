import {FC} from 'react';
import {useStyles} from './useStyles';
import {Box, Typography} from '@material-ui/core';
import {CustomButton} from '@src/components/elements/custom_button/CustomButton';
import {AddIcon} from '@src/components/elements/icons/AddIcon';
import Link from 'next/link';

export const EmptyPage: FC<any> = (props) => {
    const {label, action, link, tutorialLink, tutorialText} = props;

    const classes = useStyles();
    return (
        <Box
            display='flex'
            alignItems='center'
            flexDirection='column'
            className={classes.root}
            justifyContent='space-evenly'
        >
            <Typography variant='h6'>
                {label}
            </Typography>
            {action && link && (
                <Link href={link}>
                    <a>
                        <CustomButton className={classes.createPost}>
                            <Typography variant='subtitle1'>
                                {action}
                            </Typography>
                        </CustomButton>
                    </a>
                </Link>
            )}
            {tutorialLink &&
            <Link href={tutorialLink}>
                <a>
                    <Typography variant='subtitle2'>
                        {tutorialText}
                    </Typography>
                </a>
            </Link>
            }
        </Box>
    );
};

