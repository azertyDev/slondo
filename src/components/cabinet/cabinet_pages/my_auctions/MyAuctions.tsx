import {FC, ReactElement} from 'react';
import {CustomModal} from '@src/components/elements/custom_modal/CustomModal';
import {Box, FormControlLabel, Switch, Typography} from '@material-ui/core';
import {numberPrettier} from '@root/src/helpers';
import {Notification} from '@src/components/cabinet/cabinet_pages/notifications/notification_card/Notification';
import {WithT} from 'i18next';
import {ResponsiveModal} from '@src/components/elements/responsive_modal/ResponsiveModal';

type MyAuctionsPropsType = {
    data?: any,
    handleClose: () => void,
    openModal: boolean,
    ModalContent: () => ReactElement,
    handleDeleteNotification?: (id: number, ads_id: number) => () => void,
    fetchUserPhone?: (user_id: number) => () => void,
    openDialog?,
    closeDialog?: () => void,
    phone?: number,
    selectedAuction?,
    pagination?: ReactElement,
    auctionTabs: ReactElement,
    currentNotifications?
} & WithT

export const MyAuctions: FC<MyAuctionsPropsType> = (props) => {
    const {
        t,
        openModal,
        auctionTabs,
        ModalContent,
        phone,
        openDialog,
        currentNotifications,
        selectedAuction,
        pagination,
        fetchUserPhone,
        handleClose,
        closeDialog,
        handleDeleteNotification
    } = props;

    return (
        <>
            {auctionTabs}
            <CustomModal
                handleModalClose={handleClose}
                openModal={openModal}
            >
                <ModalContent />
            </CustomModal>
            <ResponsiveModal
                openDialog={openDialog ?? false}
                handleCloseDialog={closeDialog}
                maxWidth='md'
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
                {currentNotifications?.map(notification => (
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
                ))}
                {!!currentNotifications?.length && (
                    <Box display='flex' justifyContent='center'>
                        {pagination}
                    </Box>
                )}
            </ResponsiveModal>
        </>
    );
};
