import {ComponentType, useContext, useEffect} from 'react';
import {cookies} from '@src/helpers';
import {useRouter} from 'next/router';
import {AuthCtx} from "@src/context/AuthCtx";

export const withAuthRedirect = (Component: ComponentType<any>) => () => {
    const {push} = useRouter();
    const isAuth = !!cookies.get('slondo_auth');
    const {setAuthModalOpen} = useContext(AuthCtx);

    useEffect(() => {
        if (!isAuth) {
            push('/');
            setAuthModalOpen(true);
        }
    }, [isAuth]);

    return <Component/>;
};