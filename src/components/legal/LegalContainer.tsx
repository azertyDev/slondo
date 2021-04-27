import {FC, useEffect, useState} from 'react';
import {Grid} from '@material-ui/core';
import {LegalComponent} from '@src/components/legal/LegalComponent';
import {MainLayout} from '@src/components/main_layout/MainLayout';
import {ThemesMenu} from '@src/components/elements/themes_menu/ThemesMenu';
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
                    <ThemesMenu
                        title={title}
                        data={legal_docs}
                        handleClick={handleClick}
                    />
                    <LegalComponent docs={selectedDoc}/>
                </Grid>
            </MainLayout>
        </>
    );
};
