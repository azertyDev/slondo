import {FC} from 'react';
import {Box} from '@material-ui/core';
import {ResponsiveModal} from '@src/components/elements/responsive_modal/ResponsiveModal';
import {ModalHeader} from '@src/components/cabinet/components/modal_header/ModalHeader';
import {useStyles} from './useStyles';

type CabinetModalPropsType = {
    title?: string
    maxWidth?: string,
    fullWidth?: boolean,
    openDialog: boolean,
    hasPrevBtn?: boolean,
    handlePrevMenu?: () => void,
    handleCloseDialog: () => void
};

export const CabinetModal: FC<CabinetModalPropsType> = (props) => {
    const {
        title,
        maxWidth,
        fullWidth,
        hasPrevBtn,
        openDialog,
        handlePrevMenu,
        handleCloseDialog
    } = props;

    const classes = useStyles();
    return (
        <ResponsiveModal
            openDialog={openDialog}
            handleCloseDialog={handleCloseDialog}
            maxWidth={maxWidth}
            fullWidth={fullWidth}
        >
            <ModalHeader
                title={title}
                hasPrevBtn={hasPrevBtn}
                handleBack={handlePrevMenu}
                handleCloseDialog={handleCloseDialog}
            />
            <Box
                width={1}
                overflow='scroll'
                p={{xs: 2, md: 4}}
                className={classes.root}
            >
                {props.children}
            </Box>
        </ResponsiveModal>
    );
};
