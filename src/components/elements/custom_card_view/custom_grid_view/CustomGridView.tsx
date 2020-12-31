import React from 'react';
import { Grid } from '@material-ui/core';
import { Link } from '@root/i18n';
import { CardItem } from '@src/components/elements/card/Card';
import { transformTitle } from '@root/src/helpers';
import { useStyles } from './useStyles';

export const CustomGridView = (props) => {
    const { isFetch, ancmntType, list, t } = props;

    const classes = useStyles(props);
    return (
        <Grid container spacing={2}>
            {list.map((item, index) => {
                const translatedTitle = transformTitle(item.title);
                return (
                    <Grid key={index} xs={6} sm={4} lg={3} item>
                        <Link
                            href={`/obyavlenie/${translatedTitle}-${item.id}`}
                        >
                            <a>
                                <CardItem
                                    {...item}
                                    isFetch={isFetch}
                                    cardType={t(ancmntType)}
                                />
                            </a>
                        </Link>
                    </Grid>
                );
            })}
        </Grid>
    );
};
