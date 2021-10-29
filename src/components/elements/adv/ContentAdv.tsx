import {useEffect} from "react";
import {useStyles} from './useStyles';

declare global {
    interface Window {
        adsbygoogle: any;
    }
}

export const ContentAdv = () => {

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
            <div className='content-adv'>
                <ins
                    className="adsbygoogle"
                    style={{
                        display: 'block',
                        height: '100%'
                    }}
                    data-ad-slot="8138311139"
                    data-ad-client="ca-pub-2464319641801775"
                />
            </div>
        </div>
    );
};