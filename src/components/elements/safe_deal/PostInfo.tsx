import {FC, ReactNode} from 'react';
import Link from 'next/link';
import {useTranslation, Trans} from 'react-i18next';
import {Box, Grid, Paper, Typography} from '@material-ui/core';
import {CustomButton} from '@src/components/elements/custom_button/CustomButton';
import {useStyles} from './useStyles';

type PostInfoProps = {
    author,
    price: string,
    disable: boolean,
    createP2P: () => void,
}

export const LinkText = ({href, children}: {href: string, children?: ReactNode}) => {
    return <Link href={href}>
        <a className='link'>
            {children}
        </a>
    </Link>;
};

export const PostInfo: FC<PostInfoProps> = (props) => {
    const {
        author,
        price,
        createP2P,
        disable
    } = props;

    const {t} = useTranslation('cabinet');

    const classes = useStyles();
    return (
        <Box p='15px' className={classes.sellerInfo}>
            <Grid container spacing={1} alignContent='space-between'>
                <Grid item xs={12}>
                    <Typography
                        component='p'
                        variant='subtitle1'
                        color='textSecondary'
                    >
                        {t('cabinet:seller')}:&nbsp;
                        <span className='seller-name'>
                            {`${author.name} ${author.surname ?? ''}`}
                        </span>
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Paper elevation={0}>
                        <Typography variant='h4' align='center' gutterBottom>
                            <strong>
                                {price} {t('common:sum')}
                            </strong>
                        </Typography>
                        <Typography variant='subtitle2' component='p' color='textSecondary' align='center'>
                            {t('safe_deal_payment_text')}
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} container justifyContent='center'>
                    <Grid item xs={4}>
                        <CustomButton
                            disabled={disable}
                            onClick={createP2P}
                        >
                            {t('common:buy')}
                        </CustomButton>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant='subtitle2' component='p' color='textSecondary' align='center'>
                        <Trans
                            t={t}
                            i18nKey="post:safeDealRules"
                            components={[<LinkText href='/help/safe_shopping'/>]}
                        />
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    );
};
