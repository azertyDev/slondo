import React from 'react'
import { withTranslation } from '@root/i18n'
import { SecurityContainer } from '@src/components/security/SecurityContainer'

const ScammersPage = (props) => {
    return <SecurityContainer {...props} />
}

ScammersPage.getInitialProps = async () => ({
    namespacesRequired: ['common'],
})

export default withTranslation(['common'])(ScammersPage)
