import {Avatar, Button} from '@material-ui/core';
import React, {FC} from 'react';
import {useStyles} from './useStyles';
import {useSelector} from 'react-redux';
import {RootState} from '@src/redux/rootReducer';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import CancelIcon from '@material-ui/icons/Cancel';

type UploadAvatarFormProps = {
    file: string,
    handleUpload: (event) => void,
    handleDeleteAvatar: (id) => () => void,
    isFileSelected: boolean
    formDisable: boolean
}

export const UploadAvatarForm: FC<UploadAvatarFormProps> = (props) => {
    const { avatar, id } = useSelector((store: RootState) => store.user.info);

    const classes = useStyles({ props });
    const {
        file,
        handleUpload,
        isFileSelected,
        formDisable,
        handleDeleteAvatar
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
                    Изменить фото
                </Button>
            </label>

            <Button
                variant="contained"
                color="default"
                aria-label="upload picture"
                disabled={formDisable}
                component="span"
                startIcon={<CancelIcon color='error' fontSize='small' />}
                onClick={handleDeleteAvatar(id)}
            >
                Удалить фото
            </Button>

            {isFileSelected
                ? <ImageThumb src={file} className={classes.small} />
                : <Avatar src={avatar} className={classes.small} />
            }
        </div>
    );
};


const ImageThumb = ({ src, className }) => {
    return <Avatar
        src={URL.createObjectURL(src)}
        alt={src.name}
        className={className}
    />;
};