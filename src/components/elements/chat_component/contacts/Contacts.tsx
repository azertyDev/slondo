import {FC} from 'react';
import {Box, Typography} from "@material-ui/core";
import {UserAvatarComponent} from "@src/components/elements/user_info_with_avatar/avatar/UserAvatarComponent";
import {useStyles} from './useStyles';
import {useDate} from "@src/hooks";

type ContactsProps = {
    contacts,
    onlineList,
    unreadMsgList,
    selectedContactId: number,
    selectContact: (contact) => () => void
}

export const Contacts: FC<ContactsProps> = (props) => {
    const {
        contacts,
        onlineList,
        unreadMsgList,
        selectContact,
        selectedContactId
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

                    const isOnline = !!onlineList[id];
                    const {text, created_at} = lastMessage ?? {};
                    const {hoursMin} = getDate(created_at);
                    const unreadCount = unreadMsgList[id];
                    const hasUnread = unreadCount > 0;
                    const selected = selectedContactId === contact.id;

                    return !sys && (
                        <div
                            key={id}
                            className={`conversation-item ${hasUnread ? 'unread' : ''} ${selected ? 'selected' : ''}`}
                            onClick={selectContact(contact)}
                        >
                            <UserAvatarComponent
                                userId={id}
                                width={50}
                                height={50}
                                avatar={avatar}
                                isOnline={isOnline}
                            />
                            <Box
                                width={0.8}
                                display='flex'
                                justifyContent='space-between'
                                className='contact-info'
                            >
                                <div className='user-name'>
                                    <Typography variant='subtitle1' noWrap gutterBottom>
                                        {sys ? 'Slondo.uz' : name}
                                    </Typography>
                                    {text && (
                                        <Typography variant='subtitle2' noWrap>
                                            {text}
                                        </Typography>
                                    )}
                                </div>
                                {text && (
                                    <div className='time-counter'>
                                        <Typography variant='subtitle2' gutterBottom={!!unreadCount}>
                                            {hoursMin}
                                        </Typography>
                                        {hasUnread && (
                                            <Typography variant='subtitle2' className='msg-counter'>
                                                {unreadCount}
                                            </Typography>
                                        )}
                                    </div>
                                )}
                            </Box>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};