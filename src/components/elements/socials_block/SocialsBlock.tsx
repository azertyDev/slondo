import React, {FC} from 'react';
import Link from 'next/link';
import {FacebookIcon} from '@src/components/elements/icons/social_icons/FacebookIcon';
import {InstagramIcon} from '@src/components/elements/icons/social_icons/InstagramIcon';
import {YoutubeIcon} from '@src/components/elements/icons/social_icons/YoutubeIcon';
import {TelegramIcon} from '@src/components/elements/icons/social_icons/TelegramIcon';
import {useStyles} from './useStyles';


export const SocialsBlock: FC = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div>
                <Link href="#">
                    <a>
                        <FacebookIcon/>
                    </a>
                </Link>
                <Link href="#">
                    <a>
                        <InstagramIcon/>
                    </a>
                </Link>
                <Link href="#">
                    <a>
                        <YoutubeIcon/>
                    </a>
                </Link>
                <Link href="#">
                    <a>
                        <TelegramIcon/>
                    </a>
                </Link>
            </div>
        </div>
    );
};
