import {FC, useEffect} from "react";

declare global {
    interface Window {
        adsbygoogle: any;
    }
}

export const GAdv: FC<{ slot: number }> = ({slot}) => {
    useEffect(() => {
        try {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (err) {
            console.error(err);
        }
    }, []);

    return (
        <ins
            className="adsbygoogle"
            style={{
                display: 'block',
                height: '100%'
            }}
            data-ad-client="ca-pub-2464319641801775"
            data-ad-slot={slot}
        />
    );
};