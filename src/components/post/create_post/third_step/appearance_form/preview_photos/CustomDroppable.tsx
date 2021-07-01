import React, {FC, Fragment} from 'react';
import {Box, Grid} from '@material-ui/core';
import {Draggable, Droppable} from 'react-beautiful-dnd';
import {CustomButton} from '@src/components/elements/custom_button/CustomButton';
import {FileType} from '@root/interfaces/Post';
import {useStyles} from './useStyles';
import {CloseIcon} from '@src/components/elements/icons';


type CustomDroppableProps = {
    droppableId: string;
    files: FileType[];
    removeFile: (url) => () => void;
};

export const CustomDroppable: FC<CustomDroppableProps> = (props) => {
    const {droppableId, files, removeFile} = props;

    const classes = useStyles();
    return (
        <Droppable
            isCombineEnabled={true}
            droppableId={droppableId}
            direction="horizontal"
        >
            {provided =>
                <Grid
                    container
                    ref={provided.innerRef}
                    className={classes.root}
                    {...provided.droppableProps}
                    spacing={1}
                >
                    {files.map(({url, file}, index) => {
                        const isUrl = typeof url === 'string';
                        const isRow = (droppableId === 'firstRow' && index <= 5) || (droppableId === 'secondRow' && index > 5);

                        if (isRow) {
                            return isUrl
                                ? <Draggable
                                    key={index}
                                    index={index}
                                    draggableId={index.toString()}
                                    isDragDisabled={!isUrl}
                                >
                                    {provided =>
                                        <Grid
                                            item
                                            xs={6}
                                            sm={4}
                                            lg={3}
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                        >
                                            <Box position='relative' width='fit-content'>
                                                <img
                                                    src={url as string}
                                                    style={{
                                                        width: '140px',
                                                        height: '100px',
                                                        objectFit: 'cover'
                                                    }}
                                                    alt={file.name}
                                                />
                                                <CustomButton onClick={removeFile(url)}>
                                                    <CloseIcon />
                                                </CustomButton>
                                            </Box>
                                        </Grid>
                                    }
                                </Draggable>
                                : <Fragment key={index}>{url}</Fragment>
                        }
                    })}
                    {provided.placeholder}
                </Grid>}
        </Droppable>
    )
}