import {FC, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Container} from '@material-ui/core';
import {useTranslation} from 'next-i18next';
import {Top} from './top/Top';
import Bottom from './bottom/Bottom';
import {AuthContainer} from './auth/AuthContainer';
import {setIsAuthModalOpen, signInAction} from '@src/redux/slices/userSlice';
import {RootState} from '@src/redux/rootReducer';
import {fetchLocations} from '@src/redux/slices/locationsSlice';
import {cookies} from '@src/helpers';
import {useRouter} from 'next/router';
import {useStyles} from './useStyles';
// import {socketIO} from '@src/api/api';


export const Header: FC = () => {
    const {locale} = useRouter();
    const dispatch = useDispatch();
    const {t} = useTranslation('header');

    const userFromCookie = cookies.get('slondo_user');
    const user = useSelector((store: RootState) => store.user);
    // const userId = user.info.id;

    const isAuth = user.isAuth || !!userFromCookie;

    const handleOpenModal = () => {
        dispatch(setIsAuthModalOpen(true));
    };

    useEffect(() => {
        dispatch(fetchLocations(locale));
    }, [locale]);

    useEffect(() => {
        !user.isAuth
        && !!userFromCookie
        && dispatch(signInAction(userFromCookie));
        // !!userId && socketIO.on('connect', () => {
        //     socketIO.emit('user_connected', userId);
        // });
    }, [isAuth]);

    const classes = useStyles();
    return (
        <header className={classes.root} id='back-to-top-anchor'>
            <div className='header-wrapper'>
                <Container maxWidth="xl">
                    <Top
                        t={t}
                        isAuth={isAuth}
                        handleOpenModal={handleOpenModal}
                    />
                    <div>
                        <Bottom
                            t={t}
                            isAuth={isAuth}
                            avatar={user.info.avatar}
                            handleOpenModal={handleOpenModal}
                        />
                    </div>
                </Container>
                <div className={classes.modalDialog}>
                    <AuthContainer/>
                </div>
            </div>
        </header>
    );
};
