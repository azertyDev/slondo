import React, {Dispatch, FC} from 'react';
import {DragDropContext, resetServerContext, DropResult} from 'react-beautiful-dnd';
import {TOTAL_FILES_SIZE_LIMIT} from '@src/constants';
import {FileType} from "@root/interfaces/Post";
import {CustomDroppable} from "./CustomDroppable";


type PreviewPhotosPropsType = {
    values: { files: FileType[] },
    setValues: Dispatch<unknown>
};

const sizeCounter = (files) => (
    files.reduce(
        (total, {size}) => {
            if (size) {
                total += total + size
            }
            return total;
        },
        0
    )
);

export const PreviewPhotos: FC<PreviewPhotosPropsType> = (props) => {
    resetServerContext();

    const {values, setValues} = props;
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
                    files
                });
            }
        });
    };

    return (
        <div>
            <input
                type='file'
                onChange={handleUploadFile}
                multiple={true}
                accept="image/png,image/jpeg"
            />
            <DragDropContext enableDefaultSensors={true} onDragEnd={handleOnDragEnd}>
                <CustomDroppable
                    droppableId='firstRow'
                    files={files}
                    removeFile={removeFile}
                />
                <CustomDroppable
                    droppableId='secondRow'
                    files={files}
                    removeFile={removeFile}
                />
            </DragDropContext>
        </div>
    )
};