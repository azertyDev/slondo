import {FC, Fragment, useEffect, useState} from 'react';
import {Grid} from '@material-ui/core';
import {legal_docs} from './LegalDocs';
import {useStyles} from './useStyles';

export const LegalComponent: FC<{term: string}> = ({term}) => {
    const legalDoc = legal_docs.find(doc => doc.term === term);
    const [selectedDoc, setSelectedDoc] = useState(legalDoc);

    useEffect(() => {
        setSelectedDoc(legalDoc);
    }, [term]);

    const classes = useStyles();
    return (
        <div className={classes.root}>
            {selectedDoc.title}
            {selectedDoc.preface}
            {
                selectedDoc.paragraphs.map((doc) => {
                    return (
                        <div key={doc.id}>
                            {doc.name}
                            <ul className={classes.list}>
                                {doc.terms.map(term => term && <Fragment key={term.id}>{term.desc}</Fragment>)}
                            </ul>
                        </div>
                    );
                })
            }
        </div>
    );
}
