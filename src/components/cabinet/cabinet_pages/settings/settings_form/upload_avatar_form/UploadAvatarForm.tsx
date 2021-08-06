import {FC} from 'react';
import {WithT} from 'i18next';
import {Avatar, Box, Button, Typography} from '@material-ui/core';
import {Add, Close} from '@material-ui/icons';
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
        <Box
            display='flex'
            id="upload-box"
        >
            <input
                id="icon-button-file"
                type="file"
                style={{display: 'none'}}
                onChange={handleUpload}
                accept='image/jpeg, image/png'
                disabled={!editable}
            />
            <Avatar
                className={classes.small}
                src={typeof avatar === 'object' && !!avatar ? URL.createObjectURL(avatar) : avatar}
            />
            <Box
                ml={2}
                display='flex'
                flexDirection='column'
                justifyContent='space-around'
            >
                <label htmlFor="icon-button-file">
                    <Button
                        color="secondary"
                        component="span"
                        variant="contained"
                        disabled={!editable}
                        aria-label="upload picture"
                        startIcon={
                            <span className={classes.icon}>
                                <Add
                                    color='secondary'
                                    fontSize='small'
                                    classes={{
                                        fontSizeSmall: '1.05rem'
                                    }}
                                />
                            </span>
                        }
                        classes={{
                            root: classes.button
                        }}
                    >
                        <Typography variant='subtitle1' component='p' color='textSecondary'>
                            {avatar
                                ? t('cabinet:editAvatar')
                                : t('cabinet:addAvatar')}
                        </Typography>
                    </Button>
                </label>
                <Button
                    color="default"
                    component="button"
                    variant="contained"
                    aria-label="upload picture"
                    onClick={handleDeleteAvatar}
                    disabled={!editable || !avatar}
                    startIcon={
                        <span className={classes.icon}>
                            <Close color='error' fontSize='small' />
                        </span>
                    }
                    classes={{
                        root: classes.button
                    }}
                >
                    <Typography variant='subtitle1' component='p' color='textSecondary'>
                        {t('cabinet:deleteAvatar')}
                    </Typography>
                </Button>
            </Box>
        </Box>
    );
};