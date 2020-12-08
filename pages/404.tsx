import React from "react";
import {withTranslation} from "../i18n";


const Custom404 = ({t}) => {
    return <h1>{t('pageNotFound')}</h1>
}

export default withTranslation(['errors'])(Custom404);