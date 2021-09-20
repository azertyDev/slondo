import {FC} from 'react';
import {Typography} from "@material-ui/core";
import {UserAvatarComponent} from "@src/components/elements/user_info_with_avatar/avatar/UserAvatarComponent";
import {useStyles} from './useStyles';

type ContactsProps = {
    contacts,
    selectChat: (chat) => () => void
}

export const Contacts: FC<ContactsProps> = (props) => {
    const {
        contacts,
        selectChat
    } = props;

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className='conversation-list'>
                {contacts.map(({contact}) => {
                    return (
                        <div
                            key={contact.id}
                            className='conversation-item'
                            onClick={selectChat(contact)}
                        >
                            <UserAvatarComponent
                                width={50}
                                height={50}
                                avatar={contact.avatar}
                            />
                            <div className='user-info'>
                                <div className='user-name'>
                                    <Typography variant='subtitle1'>
                                        {contact.name}
                                    </Typography>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};