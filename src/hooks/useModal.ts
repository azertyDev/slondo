import {useState} from 'react';

export const useModal = (initState?: boolean) => {
    const [modalOpen, setModalOpen] = useState(!!initState);

    const handleModalOpen = () => {
        setModalOpen(true);
    };
    const handleModalClose = () => {
        setModalOpen(false);
    };

    return {
        modalOpen,
        handleModalOpen,
        handleModalClose
    };
};