import React, {ComponentType, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setIsAuthModalOpen} from "../redux/slices/authRegSlice";
import {RootState} from "@src/redux/rootReducer";
import {Router} from '@root/i18n';


export const withAuthRedirect = (Component: ComponentType<any>) => {
    return () => {
        const {isAuth} = useSelector(({auth}: RootState) => auth);
        const dispatch = useDispatch();

        useEffect(() => {
            if (!isAuth) {
                Router.push('/');
                dispatch(setIsAuthModalOpen(true));
            }
        }, [isAuth]);

        return isAuth && <Component/>;
    }
};
