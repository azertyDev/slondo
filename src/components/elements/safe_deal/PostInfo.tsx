import {FC, ReactNode} from 'react';
import Link from 'next/link';
import {useTranslation, Trans} from 'next-i18next';
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
            <Grid container spacing={3} justifyContent='center'>
                <Grid item xs={12}>
                    <Typography
                        component='p'
                        variant='subtitle1'
                        color='textSecondary'
                        align='center'
                    >
                        {t('cabinet:seller')}:&nbsp;<br />
                        <span className='seller-name'>
                            {`${author.name} ${author.surname ?? ''}`}
                        </span>
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={10}>
                    <Paper elevation={0}>
                        <Typography variant='h4' align='center' gutterBottom>
                            <strong>
                                {price}
                            </strong>
                            &nbsp; {t('common:sum')}
                        </Typography>
                        <Typography variant='subtitle2' component='p' color='textSecondary' align='center'>
                            {t('safe_deal_payment_text')}
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <CustomButton
                        disabled={disable}
                        onClick={createP2P}
                    >
                        {t('common:pay')}
                    </CustomButton>
                </Grid>
                <Grid item xs={9}>
                    <Typography variant='subtitle2' component='p' color='textSecondary' align='center'>
                        <Trans
                            t={t}
                            i18nKey="post:safeDealRules"
                            components={[<LinkText href='/help/safe_deal_offer'/>]}
                        />
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    );
};
