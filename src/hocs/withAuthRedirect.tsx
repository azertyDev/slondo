import {ComponentType, useEffect} from "react";
import {useDispatch} from "react-redux";
import {cookies} from "@src/helpers";
import {setIsAuthModalOpen} from "../redux/slices/userSlice";

export const withAuthRedirect = (Component: ComponentType<any>) => () => {
    const dispatch = useDispatch();
    const isAuth = !!cookies.get('slondo_auth');

    useEffect(() => {
        if (!isAuth) {
            // Router.push('/');
            dispatch(setIsAuthModalOpen(true));
        }
    }, [isAuth]);

    return <Component/>;
};