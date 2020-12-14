import React, {Fragment} from "react";
import {Grid} from "@material-ui/core";
import {Draggable, Droppable} from "react-beautiful-dnd";
import {ButtonComponent} from "@src/components/elements/button/Button";


export const CustomDroppable = (props) => {
    const {droppableId, files, isPreview, removeFile} = props;

    return (
        <Droppable
            isCombineEnabled={true}
            droppableId={droppableId}
            direction="horizontal"
        >
            {provided => (
                <Grid
                    container
                    className="images-wrapper"
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                >
                    {
                        files.map(({url, file}, index) => {
                            const isUrl = typeof url === 'string';

                            if (
                                (droppableId === 'firstRow' && index <= 3)
                                ||
                                (droppableId === 'secondRow' && index > 3)
                            ) {
                                return (
                                    isUrl
                                        ? <Draggable
                                            key={index}
                                            index={index}
                                            draggableId={index.toString()}
                                            isDragDisabled={isPreview || !isUrl}
                                        >
                                            {provided => (
                                                <Grid
                                                    item
                                                    xs={4}
                                                    md={3}
                                                    ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                >
                                                    <img
                                                        src={url}
                                                        style={{
                                                            width: '160px',
                                                            height: '120px',
                                                            objectFit: 'cover'
                                                        }}
                                                        alt={file.name}
                                                    />
                                                    <ButtonComponent
                                                        disabled={isPreview}
                                                        onClick={removeFile(url)}
                                                    >X</ButtonComponent>
                                                </Grid>
                                            )}
                                        </Draggable>
                                        : (
                                            !isPreview && <Fragment key={index}>
                                                {url}
                                            </Fragment>
                                        )
                                )
                            }
                        })}
                    {provided.placeholder}
                </Grid>
            )}
        </Droppable>
    )
}