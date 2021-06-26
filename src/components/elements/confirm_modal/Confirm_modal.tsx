import {FC} from 'react';
import {CustomModal} from '@src/components/elements/custom_modal/CustomModal';
import {CustomButton} from '@src/components/elements/custom_button/CustomButton';

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
                        {cancelTxt}
                    </CustomButton>
                    <CustomButton onClick={handleConfirm}>
                        {confirmTxt}
                    </CustomButton>
                </div>
            </div>
        </CustomModal>
    );
};
