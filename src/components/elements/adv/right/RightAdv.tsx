import {FC} from "react";
import Link from "next/link";
import {useStyles} from '../useStyles';
import {AdvType} from "@root/interfaces/Adv";
import {useScrollTrigger} from "@material-ui/core";
import {GAdv} from "@src/components/elements/adv/GAdv";

declare global {
    interface Window {
        adsbygoogle: any;
    }
}

type RightAdvProps = {
    threshold: number
    adv: AdvType
}

export const RightAdv: FC<RightAdvProps> = ({adv, threshold}) => {
    const {google_ads, image, url} = adv;

    const trigger = useScrollTrigger({disableHysteresis: true, threshold});
    const isScrollBreak = threshold ? trigger : null;

    const classes = useStyles({isScrollBreak, image});
    return (
        <div className={classes.root}>
            {google_ads
                ? <GAdv slot={8138311139}/>
                : <Link href={url}>
                    <a>
                        <div className='right-adv'/>
                    </a>
                </Link>
            }
        </div>
    );
};