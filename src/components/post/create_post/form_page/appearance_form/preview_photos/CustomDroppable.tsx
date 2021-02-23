import React, {FC, Fragment} from "react";
import {Grid} from "@material-ui/core";
import {Draggable, Droppable} from "react-beautiful-dnd";
import {ButtonComponent} from "@src/components/elements/button/Button";
import {FileType} from "@root/interfaces/Post";


type CustomDroppableProps = {
    droppableId: string;
    files: FileType[];
    removeFile: (url) => () => void;
};

export const CustomDroppable: FC<CustomDroppableProps> = (props) => {
    const {droppableId, files, removeFile} = props;

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
                    className="images-wrapper"
                    {...provided.droppableProps}
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
                                            lg={2}
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                        >
                                            <img
                                                src={url as string}
                                                style={{
                                                    width: '140px',
                                                    height: '100px',
                                                    objectFit: 'cover'
                                                }}
                                                alt={file.name}
                                            />
                                            <ButtonComponent
                                                onClick={removeFile(url)}
                                            >X</ButtonComponent>
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