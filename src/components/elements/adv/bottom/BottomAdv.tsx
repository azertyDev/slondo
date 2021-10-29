import {FC} from "react";
import Link from "next/link";
import {useStyles} from '../useStyles';
import {AdvType} from "@root/interfaces/Adv";
import {GAdv} from "@src/components/elements/adv/GAdv";

declare global {
    interface Window {
        adsbygoogle: any;
    }
}

export const BottomAdv: FC<{ adv: AdvType }> = ({adv}) => {
    const {google_ads, image, url} = adv;

    const classes = useStyles({image});
    return (
        <div className={classes.root}>
            {google_ads
                ? <GAdv slot={2924339441}/>
                : <Link href={url}>
                    <a>
                        <div className='bottom-adv'/>
                    </a>
                </Link>}
        </div>
    );
};