import React from 'react'
import { Typography, Paper } from '@material-ui/core'
import { BreadcrumbsComponent } from 'components/elements/breadcrumbs/Breadcrumbs'
import { ButtonComponent } from 'components/elements/button/Button'
import { Link } from '../../../../i18n'

// icons
import { FavoriteIcon } from 'components/elements/icons/FavoriteIcon'
import { SettingsIcon } from 'components/elements/icons/SettingsIcon'
import { LocationIcon } from 'components/elements/icons/LocationIcon'
import { GromophoneIcon } from 'components/elements/icons/GromophoneIcon'
import { PromoteIcon } from 'components/elements/icons/PromoteIcon'
import { EyeIcon } from 'components/elements/icons/EyeIcon'

// styles
import { useStyles } from './useStyles'


export const CabinetTabItem = (props) => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <div className="ad-block">
                <div>
                    <BreadcrumbsComponent>
                        <Link href="#">
                            <a>Для дома и дачи</a>
                        </Link>
                        <Link href="#">
                            <a>Мебель и интерьер</a>
                        </Link>
                        <Typography color="primary">Столовая мебель</Typography>
                    </BreadcrumbsComponent>
                    <Typography variant="subtitle1" color="initial">
                        <span>Объявление №:</span> 10071
                    </Typography>
                </div>
                <div>
                    <div>
                        <Paper variant="outlined" elevation={2}>
                            <div className="img">
                                <Typography
                                    variant="caption"
                                    color="initial"
                                    noWrap
                                >Объявление</Typography>
                                <span>
                                    <EyeIcon />
                                    <Typography
                                        variant="caption"
                                        color="initial"
                                        noWrap
                                    >1240</Typography>

                                </span>
                            </div>
                            <div className="content">
                                <div className="header">
                                    <div>
                                        <Typography
                                            variant="subtitle1"
                                            color="initial"
                                            noWrap
                                        >
                                            Мебель от производителя по супер скидке!
                                        </Typography>
                                    </div>
                                    <div>
                                        <Typography
                                            variant="subtitle2"
                                            color="initial"
                                        >
                                            140
                                        </Typography>
                                        <Link href="#">
                                            <a>
                                                <FavoriteIcon />
                                            </a>
                                        </Link>
                                        <Link href="#">
                                            <a>
                                                <SettingsIcon />
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                                <div className="description">
                                    <Typography variant="subtitle2" color="initial">
                                        Не упустите шанс купить мебель от
                                        производителя по доступным ценам! Шкаф купе
                                        размер 138см ширина высота 210 см глубина 55
                                        см. Наш фирменный магазин находится в
                                        Мирзоулугбекском районе массив Феруза. Наш
                                        фирменный магазин находится в
                                        Мирзоулугбекском районе массив Феруза
                                    </Typography>
                                </div>
                                <div className="location">
                                    <div>
                                        <Link href="#">
                                            <a>
                                                <LocationIcon />
                                            </a>
                                        </Link>
                                        <Typography
                                            variant="caption"
                                            color="initial"
                                        >
                                            Ташкент, Ташкентская
                                            область,Мирзо-Улугбекский район
                                        </Typography>
                                    </div>
                                    <div>
                                        <Typography variant="h5" color="initial">
                                            1 300 000 сум
                                        </Typography>
                                    </div>
                                </div>
                            </div>
                        </Paper>
                    </div>
                    <div className="card-buttons">
                        <ButtonComponent><GromophoneIcon />Продвижение</ButtonComponent>
                        <ButtonComponent><PromoteIcon />Поднять в ТОП</ButtonComponent>
                        <ButtonComponent><PromoteIcon />Поднять в ленте</ButtonComponent>
                    </div>
                </div>
            </div>
        </div>
    )
}
