import {FC} from 'react';
import {CustomModal} from '@src/components/elements/custom_modal/CustomModal';
import {CustomButton} from '@src/components/elements/custom_button/CustomButton';
import {useTranslation} from 'next-i18next';

type ConfirmModalPropsType = {
    title: string,
    open: boolean,
    cancelTxt: string,
    confirmTxt: string,
    handleConfirm: () => void,
    handleClose: () => void
};

export const ConfirmModal: FC<ConfirmModalPropsType> = (props) => {
    const {
        title,
        open,
        confirmTxt,
        cancelTxt,
        handleClose,
        handleConfirm
    } = props;

    const {t} = useTranslation('common');

    return (
        <CustomModal
            openModal={open}
            handleModalClose={handleClose}
        >
            <div>
                <div className='title'>
                    {title}
                </div>
                <div className='action-btns'>
                    <CustomButton onClick={handleClose}>
                        {t(cancelTxt)}
                    </CustomButton>
                    <CustomButton onClick={handleConfirm}>
                        {t(confirmTxt)}
                    </CustomButton>
                </div>
            </div>
        </CustomModal>
    );
};
