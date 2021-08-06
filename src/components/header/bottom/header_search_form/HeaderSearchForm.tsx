import {FC, useContext, useEffect} from 'react';
import {useFormik} from 'formik';
import {
    Paper,
    Hidden,
    InputBase,
    IconButton,
    Typography, useMediaQuery, useTheme
} from '@material-ui/core';
import {SearchCtx} from '@src/context';
import {Search_icon} from '@src/components/elements/icons';
import {CustomButton} from '@src/components/elements/custom_button/CustomButton';
import {useTranslation} from 'next-i18next';
import {useRouter} from 'next/router';
import {cookies, getSearchTxt} from '@src/helpers';
import {CustomFormikProvider} from '@src/components/elements/custom_formik_provider/CustomFormikProvider';
import {transformLocations} from '@root/transformedLocations';
import {useStyles} from './useStyles';

export const HeaderSearchForm: FC = () => {
    const {push} = useRouter();
    const {t} = useTranslation('common');
    const {categories} = useRouter().query;
    const {setTerm} = useContext(SearchCtx);
    const searchTermFromUrl = getSearchTxt(categories as string[]);

    const handleSubmit = ({searchTerm}) => {
        const userLocation = cookies.get('user_location');
        let location = 'uzbekistan';

        if (userLocation) {
            const {region, city} = userLocation;
            location = city
                ? transformLocations[region.name][city.name]
                : transformLocations[region.name].name;
        }

        const url = `/${location}${searchTerm !== '' ? `/q-${searchTerm}` : ''}`;

        push(url);
    };

    const handleChange = ({target: {value}}) => {
        setTerm(value);
        setValues({searchTerm: value});
    };

    const formik = useFormik({
        initialValues: {searchTerm: ''},
        onSubmit: handleSubmit
    });

    const {
        values,
        setValues
    } = formik;

    useEffect(() => {
        setTerm(searchTermFromUrl);
        setValues({searchTerm: searchTermFromUrl});
    }, []);

    const isMdDown = useMediaQuery(useTheme().breakpoints.down('md'));

    const classes = useStyles();
    return (
        <>
            <CustomFormikProvider formik={formik}>
                <Paper component="div" className={classes.root} elevation={0}>
                    <IconButton
                        className={classes.iconButton}
                        aria-label="search"
                        disabled
                    >
                        <Search_icon/>
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
                        <CustomButton type='submit' className={classes.searchButton} color='silver'>
                            <Typography variant="subtitle2" component='p'>
                                {t('searchBtn')}
                            </Typography>
                        </CustomButton>
                    </Hidden>
                </Paper>
            </CustomFormikProvider>
        </>
    );
};
