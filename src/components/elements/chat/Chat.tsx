import {FC, useState} from 'react';
import {useStyles} from './useStyles';

export const Chat: FC = () => {
    const [chats, setChats] = useState([]);
    const [chat, setChat] = useState([]);

    const classes = useStyles();
    return (
        <div className={classes.root}>

        </div>
    );
};