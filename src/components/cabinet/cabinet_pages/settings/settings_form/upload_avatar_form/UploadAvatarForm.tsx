import {Avatar} from '@material-ui/core';
import React, {FC} from 'react';

type UploadAvatarFormProps = {
    file: string,
    handleUpload: (event) => void,
    isFileSelected: boolean
    formDisable: boolean
}

export const UploadAvatarForm: FC<UploadAvatarFormProps> = (props) => {
    const {
        file,
        handleUpload,
        isFileSelected,
        formDisable
    } = props;
    return (
        <div id="upload-box">
            <input type="file" onChange={handleUpload} accept='image/jpeg, image/png' disabled={formDisable}/>
            {isFileSelected && <ImageThumb image={file} className='user-avatar' />}
        </div>
    );
};


const ImageThumb = ({ image, className }) => {
    return <Avatar
        src={URL.createObjectURL(image)}
        alt={image.name}
        className={className}
    />;
};