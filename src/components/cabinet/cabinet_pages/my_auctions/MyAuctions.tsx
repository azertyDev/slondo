import React, {FC, ReactElement, ReactNode} from 'react';
import {CustomModal} from '@src/components/elements/custom_modal/CustomModal';
import {Box, CircularProgress, FormControlLabel, Switch, Typography} from '@material-ui/core';
import {ResponsiveDialog} from '@root/src/components/elements/responsive_dialog/ResponsiveDialog';
import {numberPrettier} from '@root/src/helpers';
import {Notification} from '@src/components/cabinet/cabinet_pages/notifications/notification_card/Notification';
import {WithT} from 'i18next';

type MyAuctionsPropsType = {
    isFetch: boolean
    handleClose: () => void,
    openModal: boolean,
    ModalContent: () => ReactElement,
    auctionCards: ReactNode,
    handleDeleteNotification?: (id: number, ads_id: number) => () => void,
    fetchUserPhone?: (user_id: number) => () => void,
    phone?: number,
    openDialog?,
    setOpenDialog?,
    selectedAuction?,
    pagination?: ReactElement,
    currentNotifications?
} & WithT

export const MyAuctions: FC<MyAuctionsPropsType> = (props) => {
    const {
        t,
        handleClose,
        openModal,
        ModalContent,
        auctionCards,
        isFetch,
        handleDeleteNotification,
        fetchUserPhone,
        phone,
        openDialog,
        setOpenDialog,
        selectedAuction,
        pagination,
        currentNotifications
    } = props;

    return (
        <>
            {isFetch ? <CircularProgress color="secondary" /> : auctionCards}
            <CustomModal
                handleModalClose={handleClose}
                openModal={openModal}
            >
                <ModalContent />
            </CustomModal>
            <ResponsiveDialog
                openDialog={openDialog}
                setOpenDialog={setOpenDialog}
            >
                <Box
                    display='flex'
                    justifyContent='center'
                >
                    <Typography variant='subtitle1'>
                        Уведомления (история)
                    </Typography>
                </Box>
                <Box
                    display='flex'
                    flexDirection='row'
                    justifyContent='space-between'
                    alignItems='center'
                >
                    <Typography>
                        Текущая ставка: {numberPrettier(selectedAuction?.auction?.bet?.bet) || 0} {t('common:sum')}
                    </Typography>
                    <Typography>
                        Аукцион №: {selectedAuction?.id}
                    </Typography>
                    <FormControlLabel
                        control={
                            <Switch
                                // checked={state.checkedA}
                                // onChange={handleChange}
                                name="checkedA" />
                        }
                        label="Уведомлять меня"
                        labelPlacement="start"
                    />
                </Box>
                {
                    currentNotifications?.map(notification =>
                        <Box
                            key={notification.id}
                            mb={1}
                        >
                            <Notification
                                t={t}
                                data={notification}
                                handleDeleteNotification={handleDeleteNotification}
                                fetchUserPhone={fetchUserPhone}
                                phone={phone}
                            />
                        </Box>
                    )
                }
                {!!currentNotifications?.length && (
                    <Box display='flex' justifyContent='center'>
                        {pagination}
                    </Box>
                )}
            </ResponsiveDialog>
        </>
    );
};
