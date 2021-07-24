import {FC} from 'react';
import {WithT} from 'i18next';
import {Avatar, Button} from '@material-ui/core';
import {AddCircle, Cancel} from '@material-ui/icons';
import {useStyles} from './useStyles';

type UploadAvatarFormProps = {
    handleUpload: (event) => void,
    handleDeleteAvatar: () => void,
    editable: boolean,
    avatar: string
} & WithT;

export const UploadAvatarForm: FC<UploadAvatarFormProps> = (props) => {
    const {
        t,
        handleUpload,
        editable,
        handleDeleteAvatar,
        avatar
    } = props;

    const classes = useStyles({props});
    return (
        <div id="upload-box">
            <input
                id="icon-button-file"
                type="file"
                style={{display: 'none'}}
                onChange={handleUpload}
                accept='image/jpeg, image/png'
                disabled={!editable}
            />
            <label htmlFor="icon-button-file">
                <Button
                    variant="contained"
                    color="secondary"
                    aria-label="upload picture"
                    component="span"
                    disabled={!editable}
                    startIcon={<AddCircle color='inherit'/>}
                >
                    {avatar
                        ? t('cabinet:editAvatar')
                        : t('cabinet:addAvatar')}
                </Button>
            </label>
            <Button
                variant="contained"
                color="default"
                aria-label="upload picture"
                disabled={!editable || !avatar}
                component="span"
                startIcon={<Cancel color='error' fontSize='small'/>}
                onClick={handleDeleteAvatar}
            >
                {t('cabinet:deleteAvatar')}
            </Button>
            <Avatar
                className={classes.small}
                src={typeof avatar === 'object' && !!avatar ? URL.createObjectURL(avatar) : avatar}
            />
        </div>
    );
};