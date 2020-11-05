import React, {useEffect, useState} from 'react'
import {useDropzone} from 'react-dropzone'

// icons
import {AddIcon} from "@src/components/elements/icons/AddIcon";

// styles
import {useStyles} from './useStyles'

export const Dropzone = (props) => {
    const classes = useStyles();

    const [files, setFiles] = useState([]);
    const {
        getRootProps,
        getInputProps
    } = useDropzone({
        accept: 'image/jpeg, image/png',
        onDrop: acceptedFiles => {
            setFiles(acceptedFiles.map(file => Object.assign(file, {
                preview: URL.createObjectURL(file)
            })));
        },
        maxFiles: 10,
    });


    const thumbs = files.map(file => (
        <div className={classes.thumb} key={file.name}>
            <div className={classes.thumbInner}>
                <img
                    alt={file.name}
                    src={file.preview}
                    className={classes.img}
                />
            </div>
        </div>
    ));

    useEffect(() => () => {
        // Make sure to revoke the data uris to avoid memory leaks
        files.forEach(file => URL.revokeObjectURL(file.preview));
    }, [files]);

    return (
        <section className={classes.root}>
            <aside className={classes.thumbsContainer}>
                <div {...getRootProps({className: 'dropzone'})}>
                    <input {...getInputProps()}/>
                    <AddIcon/>
                </div>
                {thumbs}

                {files.length > 0 &&
                <>
                    {files.map((file) => (
                        <img
                            alt="Preview"
                            key={file.preview}
                            src={file.preview}
                        />
                    ))}
                </>
                }
            </aside>

        </section>
    );
}