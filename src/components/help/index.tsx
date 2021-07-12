import {FC} from 'react';
import { Box, Typography} from '@material-ui/core';
import Link from 'next/link';
import {useStyles} from './useStyles';

export const HelpPage: FC = () => {

    const classes = useStyles();
    return (
        <Box>
            <Typography variant='subtitle1' gutterBottom>
                Выберите раздел который вас интересует или воспользуйтесь поиском
            </Typography>
            <Typography>
                Если у вас остались вопросы, можете связаться с нами нажав
                на кнопку &nbsp;
                <Link href='/help/feedback'>
                    <a className={classes.link}>
                        “Обратная связь”
                    </a>
                </Link>
            </Typography>
        </Box>
    );
};
