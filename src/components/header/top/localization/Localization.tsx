import {FC} from "react";
import {Typography} from "@material-ui/core";
import {useRouter} from "next/router";
import Link from "next/link";
import {useStyles} from './useStyles';

export const Localization: FC = () => {
    const {asPath, locale} = useRouter();

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Link
                locale='ru'
                href={asPath}
            >
                <Typography
                    component='p'
                    variant="subtitle1"
                    className={locale === 'ru' ? classes.selected : ''}
                >
                    Ру
                </Typography>
            </Link>
            <Link
                locale='uz'
                href={asPath}
            >
                <Typography
                    component='p'
                    variant="subtitle1"
                    className={locale === 'uz' ? classes.selected : ''}
                >
                    O’z
                </Typography>
            </Link>
        </div>
    )
};