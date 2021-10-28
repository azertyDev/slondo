import {useEffect} from "react";
import {useStyles} from './useStyles';

declare global {
    interface Window { adsbygoogle: any; }
}

export const RightAdv = () => {
    useEffect(() => {
        try {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (err) {
            console.error(err);
        }
    }, []);

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <ins
                className="adsbygoogle"
                style={{display: 'block'}}
                data-ad-client="ca-pub-2464319641801775"
            />
        </div>
    );
};