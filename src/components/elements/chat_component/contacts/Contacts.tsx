import {FC} from 'react';
import {Typography} from "@material-ui/core";
import {UserAvatarComponent} from "@src/components/elements/user_info_with_avatar/avatar/UserAvatarComponent";
import {useStyles} from './useStyles';

type ContactsProps = {
    contacts,
    selectContact: (contact) => () => void
}

export const Contacts: FC<ContactsProps> = (props) => {
    const {
        contacts,
        selectContact
    } = props;

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className='conversation-list'>
                {contacts.map(
                    ({
                         sys,
                         locked,
                         isBlocked,
                         contact: {id, name, avatar}
                     }) => {
                        return (
                            <div
                                key={id}
                                className='conversation-item'
                                onClick={
                                    selectContact({
                                        sys: !!sys,
                                        id,
                                        name,
                                        avatar,
                                        locked,
                                        isBlocked
                                    })
                                }
                            >
                                <UserAvatarComponent
                                    userId={id}
                                    width={50}
                                    height={50}
                                    avatar={avatar}
                                />
                                <div className='user-info'>
                                    <div className='user-name'>
                                        <Typography variant='subtitle1'>
                                            {sys ? 'Slondo.uz' : name}
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