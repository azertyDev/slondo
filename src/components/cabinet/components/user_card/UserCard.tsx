import {FC, useContext, useState} from 'react';
import {unstable_batchedUpdates} from "react-dom";
import {Typography} from "@material-ui/core";
import {userAPI} from "@src/api/api";
import {UserInfoWithAvatar} from "@src/components/elements/user_info_with_avatar/UserInfoWithAvatar";
import {CustomButton} from "@src/components/elements/custom_button/CustomButton";
import {CustomCircularProgress} from "@src/components/elements/custom_circular_progress/CustomCircularProgress";
import {LetterIcon, PhoneIcon} from "@src/components/elements/icons";
import {ErrorCtx} from "@src/context";
import {useStyles} from './useStyles';

type UserCardProps = {
    userData
}

export const UserCard: FC<UserCardProps> = (props) => {
    const {
        userData
    } = props;

    const {setErrorMsg} = useContext(ErrorCtx);

    const [isFetch, setIsFetch] = useState(false);
    const [phone, setPhone] = useState(null);

    const fetchUserPhone = async () => {
        if (!phone) {
            try {
                setIsFetch(true);
                const {phone} = await userAPI.getPhoneByUserId(userData.id);
                unstable_batchedUpdates(() => {
                    setPhone(phone);
                    setIsFetch(false);
                });
            } catch (e) {
                unstable_batchedUpdates(() => {
                    setIsFetch(false);
                    setErrorMsg(e.message);
                });
            }
        }
    };

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <UserInfoWithAvatar
                isOwner
                width='50px'
                height='50px'
                owner={userData}
            />
            <div className='contacts-btns'>
                <CustomButton onClick={fetchUserPhone}>
                    {phone
                        ? <Typography variant='subtitle2'>
                            {phone}
                        </Typography>
                        : isFetch
                            ? <CustomCircularProgress/>
                            : <>
                                <PhoneIcon/>
                                <Typography variant='subtitle2'>
                                    Позвонить
                                </Typography>
                            </>}
                </CustomButton>
                <CustomButton disabled>
                    <LetterIcon/>
                    <Typography variant='subtitle2'>
                        Написать
                    </Typography>
                </CustomButton>
            </div>
        </div>
    );
};