import {FC} from 'react';
import {Box, Typography} from "@material-ui/core";
import {UserAvatarComponent} from "@src/components/elements/user_info_with_avatar/avatar/UserAvatarComponent";
import {useStyles} from './useStyles';
import {useDate} from "@src/hooks";

type ContactsProps = {
    contacts,
    unreadMsgList,
    selectContact: (contact) => () => void
}

export const Contacts: FC<ContactsProps> = (props) => {
    const {
        contacts,
        unreadMsgList,
        selectContact
    } = props;

    const getDate = useDate();

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className='conversation-list'>
                {contacts.map(contact => {
                    const {
                        sys,
                        lastMessage,
                        contact: {id, name, avatar}
                    } = contact;

                    const {text, created_at} = lastMessage ?? {};
                    const {time} = getDate(created_at);
                    const unreadCount = unreadMsgList[id];

                    return !sys && (
                        <div
                            key={id}
                            className='conversation-item'
                            onClick={selectContact(contact)}
                        >
                            <UserAvatarComponent
                                userId={id}
                                width={50}
                                height={50}
                                avatar={avatar}
                            />
                            <Box
                                display='flex'
                                flexDirection='column'
                            >
                                <div className='user-info'>
                                    <div className='user-name'>
                                        <Typography variant='subtitle1'>
                                            {sys ? 'Slondo.uz' : name}
                                        </Typography>
                                    </div>
                                </div>
                                {text && (
                                    <>
                                        <Typography variant='subtitle2'>
                                            {time}
                                        </Typography>
                                        <Typography variant='subtitle2' noWrap>
                                            {text}
                                        </Typography>&nbsp;
                                        {unreadCount && (
                                            <Typography>
                                                {unreadCount}
                                            </Typography>
                                        )}
                                    </>
                                )}
                            </Box>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};