import {FC} from 'react';
import Link from 'next/link';
import {useStyles} from '../useStyles';
import {AdvType} from '@root/interfaces/Adv';
import {useScrollTrigger} from '@material-ui/core';
import {GAdv} from '@src/components/elements/adv/GAdv';

declare global {
    interface Window {
        adsbygoogle: any;
    }
}

type RightAdvProps = {
    threshold?: number;
    adv: AdvType;
    mobile?: boolean;
};

export const RightAdv: FC<RightAdvProps> = ({
    adv,
    threshold,
    mobile = false
}) => {
    const {google_ads, image, mobile_image, url} = adv;

    const trigger = useScrollTrigger({disableHysteresis: true, threshold});
    const isScrollBreak = threshold ? trigger : null;

    const classes = useStyles({isScrollBreak, image, mobile_image});
    return (
        <div className={classes.root}>
            {google_ads ? (
                <div className={mobile ? 'm-right-adv' : 'right-adv'}>
                    <GAdv slot={7228462253} />
                </div>
            ) : (
                <Link href={url}>
                    <a rel="nofollow" target='_blank'>
                        <div className={mobile ? 'm-right-adv' : 'right-adv'} />
                    </a>
                </Link>
            )}
        </div>
    );
};
