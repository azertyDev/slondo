import {FC} from 'react';
import Link from 'next/link';
import {FacebookIcon} from '@src/components/elements/icons/social_icons/FacebookIcon';
import {InstagramIcon} from '@src/components/elements/icons/social_icons/InstagramIcon';
// import {YoutubeIcon} from '@src/components/elements/icons/social_icons/YoutubeIcon';
// import {TelegramIcon} from '@src/components/elements/icons/social_icons/TelegramIcon';
import {useStyles} from './useStyles';
import {Typography} from "@material-ui/core";
import {useTranslation} from "next-i18next";

export const SocialsBlock: FC = () => {
    const {t} = useTranslation('common');

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Typography variant="subtitle1" color="initial">
                {t('common:weInSocial')}:
            </Typography>
            <div>
                <Link href="https://www.facebook.com/Slondo.uz/">
                    <a target='_blank'>
                        <FacebookIcon/>
                    </a>
                </Link>
                <Link href="https://www.instagram.com/slondouz/">
                    <a target='_blank'>
                        <InstagramIcon/>
                    </a>
                </Link>
                {/*<Link href="#">*/}
                {/*    <a>*/}
                {/*        <YoutubeIcon/>*/}
                {/*    </a>*/}
                {/*</Link>*/}
                {/*<Link href="#">*/}
                {/*    <a>*/}
                {/*        <TelegramIcon/>*/}
                {/*    </a>*/}
                {/*</Link>*/}
            </div>
        </div>
    );
};
