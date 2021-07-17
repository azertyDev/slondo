import {Dispatch, FC} from 'react';
import {Box, Grid} from "@material-ui/core";
import {AddCircle} from '@material-ui/icons';
import {DragDropContext, resetServerContext, DropResult, Draggable, Droppable} from 'react-beautiful-dnd';
import {UPLOAD_FILES_LIMIT} from '@src/constants';
import {FileType} from "@root/interfaces/Post";
import {CustomButton} from "@src/components/elements/custom_button/CustomButton";
import {CloseIcon} from "@src/components/elements/icons";
import {useStyles} from './useStyles';

type PreviewPhotosPropsType = {
    values: { files: FileType[] },
    setValues: Dispatch<unknown>
};

export const PreviewPhotos: FC<PreviewPhotosPropsType> = (props) => {
    resetServerContext();
    const {values, setValues} = props;
    const {files} = values;

    const reorder = (list, startIndex, endIndex) => {
        const result = Array.from(list);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);

        return result;
    };

    const sortArray = function (arr) {
        arr.forEach((item, i) => {
            if (!item && arr[i + 1]) {
                const [removedItem] = arr.splice(i + 1, 1);
                arr.splice(i, 0, removedItem);
            }
        });
        return arr;
    };

    const handleOnDragEnd = ({destination, source}: DropResult): void => {
        if (!destination) return;

        const items = sortArray(reorder(files, source.index, destination.index));

        setValues({
            ...values,
            files: items
        });
    };

    const handleUploadFile = ({target}) => {
        let photos: any = Array.from(target.files);

        photos = photos.map(photo => ({
            file: photo,
            url: URL.createObjectURL(photo)
        }));

        const dist = photos.length - UPLOAD_FILES_LIMIT;
        const sum = files.length + dist;

        if (dist > 0) {
            photos.splice(-dist, dist);
        }
        if (sum > 0) {
            files.splice(-sum, sum);
        }

        setValues({
            ...values,
            files: [...photos, ...files]
        });
    };

    const removeFile = (url) => () => {
        files.map((item: FileType, index) => {
            if (item && (item.url === url)) {
                files.splice(index, 1, null);
                setValues({
                    ...values,
                    files
                });
            }
        });
    };

    const getDndRow = (bottom = false) => {
        return <Droppable
            direction="horizontal"
            droppableId={bottom ? 'bottom' : 'top'}
        >
            {provided =>
                <Grid
                    container
                    spacing={1}
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    className={classes.dropWrapper}
                >
                    {files.map((fileItem, index) => {
                        const offset = (!bottom && index <= 3) || (bottom && index > 3);
                        if (offset) {
                            return <Draggable
                                key={index}
                                index={index}
                                isDragDisabled={!fileItem}
                                draggableId={index.toString()}
                            >
                                {provided => (
                                    <Grid
                                        item
                                        xs={6}
                                        sm={3}
                                        md={3}
                                        lg={3}
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                        className={fileItem ? 'prev-img' : 'upload'}
                                    >
                                        {fileItem
                                            ? <Box
                                                position='relative'
                                                width='fit-content'
                                            >
                                                <img
                                                    alt={fileItem.file.name}
                                                    src={fileItem.url as string}
                                                />
                                                <CustomButton onClick={removeFile(fileItem.url)}>
                                                    <CloseIcon/>
                                                </CustomButton>
                                            </Box>
                                            : <>
                                                <label htmlFor={`upload-${index}`}>
                                                    <AddCircle/>
                                                </label>
                                                <input
                                                    type='file'
                                                    multiple={true}
                                                    id={`upload-${index}`}
                                                    onChange={handleUploadFile}
                                                    accept="image/png,image/jpeg"
                                                />
                                            </>}
                                    </Grid>
                                )}
                            </Draggable>;
                        }
                    })}
                    {provided.placeholder}
                </Grid>}
        </Droppable>;
    };

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <DragDropContext enableDefaultSensors={true} onDragEnd={handleOnDragEnd}>
                {getDndRow()}
                {getDndRow(true)}
            </DragDropContext>
        </div>
    );
};