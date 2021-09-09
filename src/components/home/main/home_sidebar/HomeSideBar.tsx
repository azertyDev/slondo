import {FC} from 'react';
import {Typography} from '@material-ui/core';
import {FaqComponent} from '@src/components/elements/faq_component/FaqComponent';
import {SocialsBlock} from '@src/components/elements/socials_block/SocialsBlock';
import {useTranslation} from 'next-i18next';
import {useStyles} from './useStyles';

export const HomeSidebar: FC = () => {
    const {t} = useTranslation('common');
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <section className="faq-wrapper">
                <FaqComponent t={t}/>
                <Typography variant="subtitle1" color="initial">
                    {t('weInSocial')}:
                </Typography>
                <SocialsBlock/>
            </section>
        </div>
    );
};