import {FC} from 'react';
import {Typography} from '@material-ui/core';
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
            <Typography variant='subtitle1' className='title'>
                <strong>
                    {t('filters:car.body_type.name')}
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
                    <Typography
                        key={body.id}
                        variant='subtitle1'
                        onClick={() => handleSelect('body', body)}
                        className={body.id === values.body?.id ? 'selected' : ''}
                    >
                        {body.name}
                    </Typography>
                ))}
            </div>
        </div>
    );
};