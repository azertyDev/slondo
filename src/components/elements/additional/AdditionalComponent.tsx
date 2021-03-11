import React, { FC } from 'react'
import { Typography, Portal } from '@material-ui/core'
import { ButtonComponent } from '@src/components/elements/button/Button'
import { useStyles } from './useStyles'


export const AdditionalComponent: FC = () => {
    const [show, setShow] = React.useState(false)
    const container = React.useRef(null)

    const handleClick = () => {
        setShow(!show)
    }

    const classes = useStyles()
    return (
        <div className={classes.root}>
            <div>
                <Typography variant='subtitle1' className={classes.title}>
                    Размещайте объявления и аукционы на Slondo совершенно бесплатно
                </Typography>
                <Typography variant='subtitle2' className={classes.subTitle}>
                    В своём стремлении улучшить пользовательский опыт мы упускаем, что диаграммы связей
                    неоднозначны и будут преданы социально-демократической анафеме. Вот вам яркий пример
                    современных тенденций - укрепление и развитие внутренней структуры требует определения и
                    уточнения позиций, занимаемых участниками в отношении поставленных задач. Как уже
                    неоднократно упомянуто, многие известные личности призывают нас к новым свершениям,
                    которые, в свою очередь, должны быть в равной степени предоставлены сами себе.
                </Typography>
                {show ? (
                    <Portal container={container.current}>
                        <ul className={classes.additionalList}>
                            <li>
                                <Typography variant='subtitle2'>
                                    В своём стремлении улучшить пользовательский опыт мы упускаем, что диаграммы связей
                                    неоднозначны и будут преданы социально-демократической анафеме. Вот вам яркий пример
                                    современных тенденций - укрепление и развитие внутренней структуры требует
                                    определения и
                                    уточнения позиций, занимаемых участниками в отношении поставленных задач. Как уже
                                    неоднократно упомянуто, многие известные личности призывают нас к новым свершениям,
                                    которые, в свою очередь, должны быть в равной степени предоставлены сами себе.
                                </Typography>
                            </li>
                        </ul>
                    </Portal>
                ) : null}
            </div>
            <div ref={container} />
            <ButtonComponent
                type="button"
                onClick={handleClick}
                className={classes.button}
                disableRipple
            >
                <Typography variant='subtitle1'>{show ? 'Скрыть' : 'Читать далее'}</Typography>
            </ButtonComponent>
        </div>
    )
}
