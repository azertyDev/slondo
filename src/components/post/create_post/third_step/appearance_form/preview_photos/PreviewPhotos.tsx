import {FC} from 'react';
import AddIcon from '@material-ui/icons/Add';
import {Box, Grid, useMediaQuery, useTheme} from '@material-ui/core';
import {DragDropContext, resetServerContext, Draggable, Droppable} from 'react-beautiful-dnd';
import {CustomButton} from '@src/components/elements/custom_button/CustomButton';
import {CloseIcon} from '@src/components/elements/icons';
import {useStyles} from './useStyles';

type PreviewPhotosPropsType = {
    files,
    removeFile,
    handleUploadFile,
    handleOnDragEnd
};

export const PreviewPhotos: FC<PreviewPhotosPropsType> = (props) => {
    resetServerContext();
    const {
        files,
        removeFile,
        handleUploadFile,
        handleOnDragEnd
    } = props;

    const isXsDown = useMediaQuery(useTheme().breakpoints.down('xs'));

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
                                            <label
                                                htmlFor={`upload-${index}`}
                                            >
                                                <Box
                                                    display='flex'
                                                    component='span'
                                                    alignItems='center'
                                                    justifyContent='center'
                                                >
                                                    <AddIcon />
                                                </Box>
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