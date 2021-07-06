import {FC, useState} from 'react';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {CabinetModal} from '@src/components/cabinet/components/cabinet_modal/CabinetModal';
import {IconButton, List, ListItem, ListItemText, Typography} from '@material-ui/core';
import {userAPI} from '@src/api/api';
import {setErrorMsgAction} from '@src/redux/slices/errorSlice';
import {useDispatch} from 'react-redux';
import {useTranslation} from 'next-i18next';
import {CustomCircularProgress} from '@src/components/elements/custom_circular_progress/CustomCircularProgress';
import {CommonModalType} from "@src/components/cabinet/CabinetWrapper";
import {useStyles} from './useStyles';


export const SettingsModal: FC<CommonModalType> = (props) => {
    const {
        post,
        open,
        onClose,
        handleRefresh
    } = props;

    const dispatch = useDispatch();
    const {t} = useTranslation('cabinet');

    const [isFetch, setIsFetch] = useState(false);
    const [modalContentIndex, setModalContentIndex] = useState(1);

    const handleModalContentIndex = (index) => () => {
        setModalContentIndex(index);
    };

    const handlePrevMenu = () => {
        const backValue = modalContentIndex === 5 ? 3 : 1;
        setModalContentIndex(modalContentIndex - backValue);
    };

    const riseInTape = (post_id: number) => async () => {
        try {
            setIsFetch(true);
            await userAPI.ricePostInTape(post_id);
            onClose();
            setIsFetch(false);
            setModalContentIndex(1);
        } catch (e) {
            setIsFetch(false);
            dispatch(setErrorMsgAction(e.message));
        }
    };

    const handleDeactivate = async () => {
        try {
            setIsFetch(true);
            await userAPI.deactivateById(post.id);
            onClose();
            handleRefresh();
            setIsFetch(false);
        } catch (e) {
            setIsFetch(false);
            dispatch(setErrorMsgAction(e.message));
        }
    };

    const classes = useStyles();
    const getModalContent = () => {
        switch (modalContentIndex) {
            case 1:
                return <List
                    component="nav"
                    aria-label="main"
                    disablePadding
                    className={classes.settingsList}
                >
                    <ListItem
                        button
                        onClick={handleModalContentIndex(3)}
                    >
                        <ListItemText
                            primary="Деактивировать"
                            primaryTypographyProps={{variant: 'subtitle1'}}
                        />
                    </ListItem>
                    <ListItem
                        button
                        onClick={handleModalContentIndex(2)}
                    >
                        <ListItemText
                            primary="Поднять в ленте"
                            primaryTypographyProps={{variant: 'subtitle1'}}
                            secondary="(можно использовать 3 раза в неделю)"
                            secondaryTypographyProps={{variant: 'subtitle2'}}
                        />
                    </ListItem>
                </List>;
            case 2:
                return <List
                    component="nav"
                    aria-label="main"
                    className={classes.settingsList}
                    disablePadding
                >
                    <ListItem
                        button
                        onClick={riseInTape(post.id)}
                    >
                        <ListItemText
                            primary='Да'
                            primaryTypographyProps={{variant: 'subtitle1'}}
                        />
                    </ListItem>
                    <ListItem
                        button
                        onClick={handlePrevMenu}
                    >
                        <ListItemText
                            primary='Нет'
                            primaryTypographyProps={{variant: 'subtitle1'}}
                        />
                    </ListItem>
                </List>;
            case 3:
                return <List
                    disablePadding
                    component="nav"
                    aria-label="main"
                    className={classes.settingsList}
                >
                    <ListItem
                        button
                        onClick={handleDeactivate}
                    >
                        <ListItemText
                            primary='Да'
                            primaryTypographyProps={{variant: 'subtitle1'}}
                        />
                    </ListItem>
                    <ListItem
                        button
                        onClick={handlePrevMenu}
                    >
                        <ListItemText
                            primary='Нет'
                            primaryTypographyProps={{variant: 'subtitle1'}}
                        />
                    </ListItem>
                </List>;
            default:
                return modalContentIndex;
        }
    };

    const ModalContent = () => (
        <>
            {modalContentIndex === 1
                ? <Typography className="title" variant="h6">
                    {`${t(`common:${post.ads_type}`)} №: ${post.id}`}
                </Typography>
                : modalContentIndex !== 10 && modalContentIndex !== 11 && (
                <IconButton
                    size="medium"
                    aria-label="back"
                    className='prev-btn'
                    onClick={handlePrevMenu}
                >
                    <ArrowBackIcon fontSize="inherit"/>
                </IconButton>
            )}
            {getModalContent()}
        </>
    );

    return (
        <CabinetModal
            maxWidth='xs'
            openDialog={open}
            handleCloseDialog={onClose}
        >
            {isFetch ? <CustomCircularProgress/> : <ModalContent/>}
        </CabinetModal>
    );
};
