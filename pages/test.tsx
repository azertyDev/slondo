import React from "react"
import {withTranslation} from "../i18n"
import {Dropzone} from "@src/components/elements/dropzone/Dropzone";


const TestPage = (props) => {
    return (
        <Dropzone/>
    )
};

TestPage.getInitialProps = async () => ({
    namespacesRequired: ['main', 'common'],
});

export default withTranslation(['main', 'common'])(TestPage);