import {Dispatch, FC} from 'react';
import {AddCircle} from '@material-ui/icons';
import {Box, Grid, useMediaQuery, useTheme} from "@material-ui/core";
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

    const isXsDown = useMediaQuery(useTheme().breakpoints.down('xs'));

    const reorder = (list, startIndex, endIndex) => {
        const result = Array.from(list);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);

        return result;
    };

    const sortArray = (arr) => {
        const sorted = arr.filter(item => !!item);
        const nulls = Array.from({length: UPLOAD_FILES_LIMIT - sorted.length}).map(_ => null);
        return [...sorted, ...nulls];
    };

    const handleOnDragEnd = ({destination, source}: DropResult) => {
        if (!destination) return;
        setValues({
            ...values,
            files: sortArray(reorder(files, source.index, destination.index))
        });
    };

    const handleUploadFile = ({target}) => {
        let photos: any = Array.from(target.files);

        photos = photos.map(photo => ({
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
        const sorted = files.filter((item: FileType) => item && item.url !== url);
        const nulls = Array.from({length: UPLOAD_FILES_LIMIT - sorted.length}).map(_ => null);
        setValues({
            ...values,
            files: [...sorted, ...nulls]
        });
    };

    const getDndRow = (bottom = false) => {
        return <Droppable
            droppableId={bottom ? 'bottom' : 'top'}
            direction={isXsDown ? 'vertical' : 'horizontal'}
        >
            {provided =>
                <Grid
                    container
                    spacing={1}
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    className={classes.dropWrapper}
                >
                    {files.map((file, index) => {
                        return <Draggable
                            key={index}
                            index={index}
                            isDragDisabled={!file}
                            draggableId={index.toString()}
                        >
                            {provided => (
                                <Grid
                                    item
                                    xs={6}
                                    sm={3}
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    className={file ? 'prev-img' : 'upload'}
                                >
                                    {file
                                        ? <Box position='relative'>
                                            <img
                                                alt={file.url as string}
                                                src={file.url as string}
                                            />
                                            <CustomButton onClick={removeFile(file.url)}>
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
            </DragDropContext>
        </div>
    );
};