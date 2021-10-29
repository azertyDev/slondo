import {FC} from "react";
import {useStyles} from './useStyles';
import {AdvType} from "@root/interfaces/Adv";

declare global {
    interface Window {
        adsbygoogle: any;
    }
}

export const BottomAdv: FC<AdvType> = ({adv}) => {
    const {google_ads} = adv;

    const classes = useStyles();
    return (
        <div className={`${classes.root} ${classes.bottom}`}>
            {google_ads
                ? <ins
                    className="adsbygoogle"
                    style={{display: 'block'}}
                    data-ad-client="ca-pub-2464319641801775"
                />
                : <div>Banner</div>}
        </div>
    );
};