import React from 'react'
import { withTranslation } from '@root/i18n'
import { LegalContainer } from '@src/components/legal/LegalContainer'

const LicenceAgreementPage = (props) => {
    return <LegalContainer {...props} />
}

LicenceAgreementPage.getInitialProps = async () => ({
    namespacesRequired: ['common'],
})

export default withTranslation(['common'])(LicenceAgreementPage)

