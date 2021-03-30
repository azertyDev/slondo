import {FC, useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Container} from '@material-ui/core';
import {useTranslation} from 'next-i18next';
import Top from "./top/TopContainer";
import Bottom from './bottom/Bottom';
import {AuthRegPage} from "./auth_reg_page/AuthRegPage";
import {signInAction, setIsAuthModalOpen} from '@src/redux/slices/userSlice';
import {RootState} from "@src/redux/rootReducer";
import {fetchLocations} from "@src/redux/slices/locationsSlice";
import {cookies} from "@src/helpers";
import {useRouter} from "next/router";
import {useStyles} from './useStyles';


export const Header: FC = () => {
    const {locale} = useRouter();
    const dispatch = useDispatch();
    const {t} = useTranslation(['header']);

    const userFromCookie = cookies.get('slondo_user');
    const userFromStore = useSelector((store: RootState) => store.user);

    const isAuth = userFromStore.isAuth || !!userFromCookie;

    const handleModal = value => () => {
        dispatch(setIsAuthModalOpen(value));
    };

    useEffect(() => {
        dispatch(fetchLocations(locale));
    }, [locale]);

    useEffect(() => {
        !userFromStore.isAuth
        && !!userFromCookie
        && dispatch(signInAction(userFromCookie));
    }, [isAuth]);

    const classes = useStyles();
    return (
        <header className={classes.root} id='back-to-top-anchor'>
            <div className='header-wrapper'>
                <Container maxWidth="xl">
                    <Top
                        t={t}
                        handleOpenModal={handleModal(true)}
                    />
                    <div>
                        <Bottom
                            t={t}
                            isAuth={isAuth}
                            handleOpenModal={handleModal(true)}
                        />
                    </div>
                </Container>
                <div className={classes.modalDialog}>
                    <AuthRegPage
                        isOpen={userFromStore.isAuthModalOpen}
                        handleCloseModal={handleModal(false)}
                    />
                </div>
            </div>
        </header>
    )
};
