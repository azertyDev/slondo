import React, {Dispatch, FC} from 'react';
import {DragDropContext, resetServerContext, DropResult} from 'react-beautiful-dnd';
import {TOTAL_FILES_SIZE_LIMIT} from '@src/constants';
import {CreatePostProps, FileType} from "@root/interfaces/Post";
import {CustomDroppable} from "../preview_photos/CustomDroppable";
import {initPhoto} from "../post_form/PostFormContainer";


interface IPreviewPhotos {
    values: CreatePostProps,
    setValues: Dispatch<unknown>
    isPreview: boolean
}

const sizeCounter = (files) => {
    return files.reduce((total, {size}) => {
            if (size) {
                total += total + size
            }
            return total;
        },
        0
    )
};

export const PreviewPhotos: FC<IPreviewPhotos> = (props) => {
    resetServerContext();

    const {values, setValues, isPreview} = props;
    const {files} = values;

    const handleOnDragEnd = ({destination, source}: DropResult): void => {
        if (!destination) return;

        const items = files;
        const [reorderedItem] = items.splice(source.index, 1);

        items.splice(destination.index, 0, reorderedItem);
        setValues({
            ...values,
            files: items
        });
    };

    const handleUploadFile = ({target}) => {
        let photos: any = Array.from(target.files);

        const totalFilesSize = sizeCounter(files);
        const selectedFilesSize = sizeCounter(photos);

        if ((totalFilesSize + selectedFilesSize) <= TOTAL_FILES_SIZE_LIMIT) {
            photos = photos.map(photo => ({
                file: photo,
                url: URL.createObjectURL(photo)
            }));

            files.splice((-photos.length), photos.length);

            setValues({
                ...values,
                files: [...photos, ...files]
            })
        }
    };

    const removeFile = (url) => () => {
        files.map((item: FileType, index) => {
            if (item.url === url) {
                files.splice(index, 1);
                setValues({
                    ...values,
                    files: [
                        ...files,
                        initPhoto
                    ]
                });
            }
        });
    };

    return (
        <div>
            <input
                type='file'
                disabled={isPreview}
                onChange={handleUploadFile}
                multiple={true}
                accept="image/png,image/jpeg"
            />
            <DragDropContext enableDefaultSensors={true} onDragEnd={handleOnDragEnd}>
                <CustomDroppable
                    droppableId='firstRow'
                    files={files}
                    isPreview={isPreview}
                    removeFile={removeFile}
                />
                <CustomDroppable
                    droppableId='secondRow'
                    files={files}
                    isPreview={isPreview}
                    removeFile={removeFile}
                />
            </DragDropContext>
        </div>
    )
};