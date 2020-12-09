import React, {ComponentType, useEffect} from "react";
import {useSelector} from "react-redux";
import {RootState} from "@src/redux/rootReducer";
import {Router} from '@root/i18n';


export const withHomeRedirect = (Component: ComponentType<any>) => {
    return () => {
        const {isAuth} = useSelector(({auth}: RootState) => auth);

        useEffect(() => {
            !isAuth && Router.push('/');
        }, [isAuth]);

        return <Component/>
    }
};