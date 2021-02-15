import React from 'react'
import { withTranslation } from '@root/i18n'
import { FeedbackContainer } from '@src/components/feedback/FeedbackContainer'

const FeedbackPage = (props) => {
    return <FeedbackContainer {...props} />
}

FeedbackPage.getInitialProps = async () => ({
    namespacesRequired: ['common'],
})

export default withTranslation(['common'])(FeedbackPage)
