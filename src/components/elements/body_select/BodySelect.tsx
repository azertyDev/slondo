import {FC} from 'react';
import {Typography} from '@material-ui/core';
import {WithT} from 'i18next';
import {useStyles} from './useStyles';


type BodyTypesProps = {
    disableRequire?: boolean,
    bodies,
    values,
    errorMsg: string,
    handleSelect: (k, v) => void
} & WithT;

export const BodySelect: FC<BodyTypesProps> = (props) => {
    const {
        t,
        values,
        bodies,
        errorMsg,
        handleSelect,
        disableRequire
    } = props;

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Typography variant='subtitle1' className='title'>
                <strong>
                    {t('filters:body')}
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