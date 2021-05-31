import {useState} from 'react';

export default (initState?) => {
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
