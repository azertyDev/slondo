import React from 'react'
import { withTranslation } from '@root/i18n'
import { PromotionsContainer } from '@src/components/promotions/PromotionsContainer'

const PromotionsPage = (props) => {
    return <PromotionsContainer {...props} />
}

PromotionsPage.getInitialProps = async () => ({
    namespacesRequired: ['common'],
})

export default withTranslation(['common'])(PromotionsPage)
