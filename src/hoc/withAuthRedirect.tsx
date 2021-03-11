import React, {ComponentType, useEffect} from "react";
import {useDispatch} from "react-redux";
// import {Router} from '@root/i18n';
import {cookies} from "@src/helpers";
import {setIsAuthModalOpen} from "../redux/slices/authRegSlice";


export const withAuthRedirect = (Component: ComponentType<any>) => () => {
    const dispatch = useDispatch();
    const isAuth = !!cookies.get('token');

    useEffect(() => {
        if (!isAuth) {
            // Router.push('/');
            dispatch(setIsAuthModalOpen(true));
        }
    }, [isAuth]);

    return <Component/>;
};