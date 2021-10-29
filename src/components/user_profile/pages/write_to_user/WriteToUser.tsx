import {ChatContainer} from "@src/components/elements/chat_component/ChatContainer";
import {FC, useContext} from "react";
import {AuthCtx} from "@src/context";
import {useTranslation} from "next-i18next";
import {Typography} from "@material-ui/core";

type WriteToUserProps = {
    userId: number
}

export const WriteToUser: FC<WriteToUserProps> = (props) => {
    const {userId} = props;
    const {t} = useTranslation('cabinet');
    const {isAuth} = useContext(AuthCtx).auth;

    return (
        <div className='chat-wrapper'>
            {isAuth
                ? <ChatContainer hideContacts initContactId={userId}/>
                : <Typography variant='subtitle1'>
                    {t('auth_require')}
                </Typography>}
        </div>
    );
};