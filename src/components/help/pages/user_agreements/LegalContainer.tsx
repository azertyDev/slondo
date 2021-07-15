import {FC, useEffect, useState} from 'react';
import {Grid} from '@material-ui/core';
import {LegalComponent} from '@src/components/help/pages/user_agreements/LegalComponent';
import {MainLayout} from '@src/components/main_layout/MainLayout';
import {legal_docs} from './LegalDocs';
import {useRouter} from 'next/router';

export const LegalContainer: FC = () => {
    const {term} = useRouter().query;
    const {push} = useRouter();
    const legalDoc = legal_docs.find(doc => doc.term === term);
    const [selectedDoc, setSelectedDoc] = useState(legalDoc);

    const title = 'Лицензионное соглашение';

    const handleClick = (term) => {
        push(`/legal/${term}`);
    };

    useEffect(() => {
        setSelectedDoc(legalDoc);
    }, [term]);

    return (
        <>
            <MainLayout title={title}>
                <Grid container>
                    <LegalComponent docs={selectedDoc}/>
                </Grid>
            </MainLayout>
        </>
    );
};