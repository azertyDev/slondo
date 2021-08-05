import {FC} from 'react';
import {Container} from '@material-ui/core';
import {ResponsiveModal} from "@src/components/elements/responsive_modal/ResponsiveModal";
import {UserPaymentCard} from "./UserPaymentCard";

type UserPaymentCardModalProps = {
    open: boolean,
    onClose: () => void
}

export const UserPaymentCardModal: FC<UserPaymentCardModalProps> = (props) => {
    const {
        open,
        onClose
    } = props;
    return (
        <ResponsiveModal
            openDialog={open}
            handleCloseDialog={onClose}
        >
            <Container maxWidth='xl'>
                <UserPaymentCard/>
            </Container>
        </ResponsiveModal>
    );
};
