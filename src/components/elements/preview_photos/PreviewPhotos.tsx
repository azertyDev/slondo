import {TOTAL_FILES_LIMIT, TOTAL_FILES_SIZE_LIMIT} from '@root/src/constants';
import React, {Dispatch, FC} from 'react';
import {DragDropContext, Droppable, Draggable, resetServerContext} from 'react-beautiful-dnd';
import {ButtonComponent} from "@src/components/elements/button/Button";
import {Grid} from "@material-ui/core";
import {CreateAdFields} from "@root/interfaces/Advertisement";
import {useStyles} from './useStyles';


interface IPreviewPhotos {
    values: CreateAdFields,
    setValues: Dispatch<any>
}

export const PreviewPhotos: FC<IPreviewPhotos> = (props) => {
    resetServerContext();

    const {values, setValues} = props;
    const {files} = values;

    const handleOnDragEnd = (result) => {
        if (!result.destination) return;

        const items = Array.from(files);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);

        setValues({...values, files: items});
    };

    const handleUploadFile = ({target}) => {
        if (target.files[0] && files.length < TOTAL_FILES_LIMIT) {

            const totalSize = files.reduce((total, item: { file: { size: number } }) => total + item.file.size, 0);

            if ((totalSize + target.files[0].size) < TOTAL_FILES_SIZE_LIMIT) {
                setValues({
                    ...values,
                    files: [
                        ...files,
                        {
                            file: target.files[0],
                            url: URL.createObjectURL(target.files[0])
                        }
                    ]
                })
            }
        }
    };

    const removeFile = (url) => () => {
        files.map((item: { url: string }, index) => {
            if (item.url === url) {
                files.splice(index, 1);
                setValues({...values, files});
            }
        });
    };
    console.log(values)

    const classes = useStyles();
    return (
        <div>
            <input type='file' onChange={handleUploadFile} accept="image/png,image/jpeg"/>
            <DragDropContext onDragEnd={handleOnDragEnd}>
                <Droppable droppableId="images" direction="horizontal">
                    {(provided) => (
                        <Grid container className="images-wrapper" {...provided.droppableProps} ref={provided.innerRef}>
                            {files.map(({url, file}: { url: string, file: { name: string } }, index) => {
                                return (
                                    <Draggable key={url} draggableId={url} index={index}>
                                        {(provided) => (
                                            <Grid
                                                item
                                                md={3}
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                            >
                                                <img
                                                    src={url}
                                                    style={{width: '160px', height: '120px', objectFit: 'cover'}}
                                                    alt={file.name}
                                                />
                                                <ButtonComponent onClick={removeFile(url)}>X</ButtonComponent>
                                            </Grid>
                                        )}
                                    </Draggable>
                                );
                            })}
                            {provided.placeholder}
                        </Grid>
                    )}
                </Droppable>
            </DragDropContext>
        </div>
    )
};