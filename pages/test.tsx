import React from "react"
import {withTranslation} from "../i18n"
import {Typography} from "@material-ui/core";
import {ReadMore} from "@src/components/elements/readMore/readMore";


const TestPage = (props) => {
    return (
        <ReadMore {...props}>
            <Typography>
                Смартфон Samsung S20 обладает тройной основной камерой 64+12+12 Мп с оптической стабилизацией и
                3-кратным оптическим зумом, которая позволяет снимать видео с фантастическим разрешением 8К (!), делать
                отличные панорамные снимки и фотографии удалённых объектов, вести замедленную съёмку со скоростью 960
                кад./с и съёмку во время поездок в машине и общественном транспорте.
                Фронтальная камера 10 Мп даёт возможность снимать видео 4К и делать прекрасные селфи. Мощный 8-ядерный
                процессор и большой объём оперативной памяти (8 Гб) позволят вам играть в новейшие игры.
            </Typography>
        </ReadMore>
    )
};

TestPage.getInitialProps = async () => ({
    namespacesRequired: ['main', 'common'],
});

export default withTranslation(['main', 'common'])(TestPage);