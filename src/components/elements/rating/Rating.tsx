import {ChangeEvent, FC} from 'react';
import {Hidden, Typography} from '@material-ui/core';
import CustomRating from '@material-ui/lab/Rating';
import {useStyles} from './useStyles';

type RatingPropsType = {
    card?: boolean,
    readOnly?: boolean,
    className?,
    ratingValue?: number,
    ratingCount?: number,
    name?: string,
    onChangeRating?: (event: ChangeEvent<any>, value: number | null) => void,
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
        <div className={`${classes.root} ${className ?? ''}`}>
            <div className='rating'>
                <CustomRating
                    name={name}
                    precision={1}
                    readOnly={readOnly}
                    onChange={onChangeRating}
                    value={Math.round(ratingValue)}
                />
                {ratingValue && (
                    <Typography variant="subtitle1" component='p'>
                        {ratingValue}
                    </Typography>
                )}
            </div>
            {card && (
                <Hidden mdDown>
                    <div>
                        <Typography
                            component='p'
                            variant="subtitle1"
                            className='ratingCount'
                        >
                            {`(${ratingCount} оценок)`}
                        </Typography>
                    </div>
                </Hidden>
            )}
        </div>
    );
};

