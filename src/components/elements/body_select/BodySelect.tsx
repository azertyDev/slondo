import {FC} from 'react';
import {Box, Typography} from '@material-ui/core';
import {useStyles} from './useStyles';
import {useTranslation} from "react-i18next";


type BodyTypesProps = {
    disableRequire?: boolean,
    bodies,
    values,
    errorMsg: string,
    handleSelect: (k, v) => void
};

export const BodySelect: FC<BodyTypesProps> = (props) => {
    const {
        values,
        bodies,
        errorMsg,
        handleSelect,
        disableRequire
    } = props;

    const {t} = useTranslation('filters');

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Typography variant='subtitle1' gutterBottom>
                <strong>
                    {t('car.body.name')}
                    {!disableRequire && <span className='error-text'>*&nbsp;</span>}
                </strong>
                {errorMsg && (
                    <span className='error-text'>
                        {errorMsg}
                    </span>
                )}
            </Typography>
            <div className='body-types'>
                {bodies?.map(body => (
                    <Box
                        key={body.id}
                        onClick={() => handleSelect('body', body)}
                        className={body.id === values.body?.id ? 'selected' : ''}
                    >
                        <Typography
                            component='p'
                            variant='subtitle1'
                        >
                            {body.name}
                        </Typography>
                    </Box>
                ))}
            </div>
        </div>
    );
};