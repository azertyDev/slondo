import {ChangeEvent, FC} from 'react';
import {Box, Hidden, Typography} from '@material-ui/core';
import CustomRating from '@material-ui/lab/Rating';
// styles
import {useStyles} from './useStyles';

type RatingPropsType = {
    card?: boolean,
    readOnly?: boolean,
    className?,
    ratingValue?: string,
    ratingCount?: number,
    name?: string,
    onChangeRating?: (event: ChangeEvent<{}>, value: number | null) => void,
};

export const Rating: FC<RatingPropsType> = (props) => {
    const {
        card,
        name,
        readOnly,
        className,
        ratingValue,
        ratingCount,
        onChangeRating
    } = props;
    const classes = useStyles();
    return (
        <div className={`${classes.root} ${className}`}>
            <div>
                <CustomRating
                    name={name}
                    readOnly={readOnly ?? true}
                    value={parseInt(ratingValue)}
                    precision={1}
                    onChange={onChangeRating}
                    {...props}
                />
                {ratingValue !== null
                    ? (<Box>
                        <Typography variant="subtitle1">
                            {ratingValue ?? 0}
                        </Typography>
                    </Box>)
                    : 0
                }
            </div>
            <Hidden mdDown>
                {card && (
                    <div>
                        <Typography variant="subtitle1">{`(${ratingCount} оценок)`}</Typography>
                    </div>
                )}
            </Hidden>
        </div>
    );
};

