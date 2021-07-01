import {ComponentType, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {cookies} from '@src/helpers';
import {setIsAuthModalOpen} from '../redux/slices/userSlice';
import {useRouter} from 'next/router';

export const withAuthRedirect = (Component: ComponentType<any>) => () => {
    const {push} = useRouter();
    const dispatch = useDispatch();
    const isAuth = !!cookies.get('slondo_auth');

    useEffect(() => {
        if (!isAuth) {
            push('/');
            dispatch(setIsAuthModalOpen(true));
        }
    }, [isAuth]);

    return <Component/>;
};