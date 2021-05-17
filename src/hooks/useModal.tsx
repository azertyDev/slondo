import {useState} from 'react';

export default () => {
    const [modalOpen, setModalOpen] = useState(false);

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
