import {FC, useContext, useEffect} from 'react';
import {useFormik} from 'formik';
import {
    Paper,
    Hidden,
    InputBase,
    IconButton,
    Typography,
    useMediaQuery,
    useTheme
} from '@material-ui/core';
import {SearchCtx} from '@src/context';
import {Search_icon} from '@src/components/elements/icons';
import {CustomButton} from '@src/components/elements/custom_button/CustomButton';
import {useTranslation} from 'next-i18next';
import {useRouter} from 'next/router';
import {CustomFormikProvider} from '@src/components/elements/custom_formik_provider/CustomFormikProvider';
import {useStyles} from './useStyles';

export const HeaderSearchForm: FC = () => {
    const {
        push,
        query: {path}
    } = useRouter();

    const {t} = useTranslation('common');
    const {setTerm} = useContext(SearchCtx);
    const searchTermFromUrl = (useRouter().query.q as string) || '';
    const isMdDown = useMediaQuery(useTheme().breakpoints.down('md'));

    const handleSubmit = async ({searchTerm}) => {
        const [userLocation] = (path as string[]) || [];

        const location = userLocation ?? 'uzbekistan';

        const url = `/${location}?by_filtering=created_at&page=1${
            searchTerm !== '' ? `&q=${searchTerm}` : ''
        }`;

        setTerm(searchTerm);
        await push(url);
    };

    const handleChange = ({target: {value}}) => {
        setValues({searchTerm: value});
    };

    const formik = useFormik({
        onSubmit: handleSubmit,
        initialValues: {searchTerm: ''}
    });

    const {values, setValues} = formik;

    useEffect(() => {
        setTerm(searchTermFromUrl);
        setValues({searchTerm: searchTermFromUrl});
    }, [searchTermFromUrl]);

    const classes = useStyles();
    return (
        <CustomFormikProvider formik={formik}>
            <Paper component="div" className={classes.root} elevation={0}>
                <IconButton
                    className={classes.iconButton}
                    aria-label="search"
                    disabled
                >
                    <Search_icon />
                </IconButton>
                <InputBase
                    id="input-base"
                    onChange={handleChange}
                    value={values.searchTerm}
                    className={classes.input}
                    placeholder={isMdDown ? '' : t('searchText')}
                    inputProps={{'aria-label': 'search category'}}
                />
                <Hidden mdDown>
                    <CustomButton
                        type="submit"
                        className={classes.searchButton}
                        color="silver"
                    >
                        <Typography variant="subtitle2" component="p">
                            {t('searchBtn')}
                        </Typography>
                    </CustomButton>
                </Hidden>
            </Paper>
        </CustomFormikProvider>
    );
};
