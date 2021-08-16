import {useContext, useEffect} from 'react';
import {cookies} from '@src/helpers';
import {useRouter} from 'next/router';
import {AuthCtx} from "@src/context/AuthCtx";
import {unstable_batchedUpdates} from "react-dom";

export const withAuthRedirect = (Component) => (props) => {
    const {push} = useRouter();
    const isAuth = !!cookies.get('slondo_auth');
    const {setAuthModalOpen} = useContext(AuthCtx);

    const authCheck = () => {
        !isAuth && unstable_batchedUpdates(async () => {
            await push('/');
            setAuthModalOpen(true);
        });
    };

    useEffect(() => {
        authCheck();
    }, [isAuth]);

    return <Component {...props} />;
};