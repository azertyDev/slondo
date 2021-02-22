import React, { FC, useEffect, useState } from 'react'
import { Grid } from '@material-ui/core'
import { LegalComponent } from '@src/components/legal/Licence'
import { MainLayout } from '@src/components/MainLayout'
import { ThemesMenu } from '@src/components/elements/themes_menu/ThemesMenu'
import { legal_docs } from './LegalDocs'
import { Router } from '@root/i18n'
import { useRouter } from 'next/router'

export const LegalContainer: FC = () => {
    const { term } = useRouter().query
    const legalDoc = legal_docs.find(doc => doc.term === term)
    const [selectedDoc, setSelectedDoc] = useState(legalDoc)

    const title = 'Лицензионное соглашение'

    const handleClick = (term) => {
        Router.push(`/legal/${term}`)
    }

    useEffect(() => {
        setSelectedDoc(legalDoc)
    }, [term])

    return (
        <>
            <MainLayout title={title}>
                <Grid container>
                    <ThemesMenu
                        data={legal_docs}
                        onClick={handleClick}
                        title={title}
                    />
                    <LegalComponent docs={selectedDoc} />
                </Grid>
            </MainLayout>
        </>
    )
}
