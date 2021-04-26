import {Avatar, Button} from '@material-ui/core';
import React, {FC} from 'react';
import {useStyles} from './useStyles';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import CancelIcon from '@material-ui/icons/Cancel';
import {WithT} from 'i18next';

type UploadAvatarFormProps = {
    file: string,
    handleUpload: (event) => void,
    handleDeleteAvatar: () => void,
    isFileSelected: boolean
    formDisable: boolean,
    avatar: string
} & WithT;

export const UploadAvatarForm: FC<UploadAvatarFormProps> = (props) => {

    const classes = useStyles({ props });
    const {
        t,
        file,
        handleUpload,
        isFileSelected,
        formDisable,
        handleDeleteAvatar,
        avatar
    } = props;
    return (
        <div id="upload-box">
            <input
                id="icon-button-file"
                type="file"
                style={{ display: 'none' }}
                onChange={handleUpload}
                accept='image/jpeg, image/png'
                disabled={formDisable}
            />
            <label htmlFor="icon-button-file">
                <Button
                    variant="contained"
                    color="secondary"
                    aria-label="upload picture"
                    component="span"
                    disabled={formDisable}
                    startIcon={<AddCircleIcon color='inherit' />}
                >
                    {
                        avatar
                            ? t('cabinet:editAvatar')
                            : t('cabinet:addAvatar')
                    }
                </Button>
            </label>
            <Button
                variant="contained"
                color="default"
                aria-label="upload picture"
                disabled={formDisable || !avatar}
                component="span"
                startIcon={<CancelIcon color='error' fontSize='small' />}
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