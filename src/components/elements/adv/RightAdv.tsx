import {FC} from "react";
import {useStyles} from './useStyles';
import {AdvType} from "@root/interfaces/Adv";
import {useScrollTrigger} from "@material-ui/core";

declare global {
    interface Window {
        adsbygoogle: any;
    }
}

type RightAdvProps = {
    threshold: number,
    image: string,
    url: string
} & AdvType

export const RightAdv: FC<RightAdvProps> = ({adv, threshold, image, url}) => {
    const {google_ads} = adv;

    const trigger = useScrollTrigger({disableHysteresis: true, threshold});
    const isScrollBreak = threshold ? trigger : null;

    const classes = useStyles({isScrollBreak, image});
    return (
        <div className={`${classes.root} ${classes.right}`}>
            {google_ads
                ? <ins
                    className="adsbygoogle"
                    style={{display: 'block'}}
                    data-ad-client="ca-pub-2464319641801775"
                />
                : <div className='ad-banner'/>}
        </div>
    );
};