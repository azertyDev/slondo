import {FC, useEffect} from 'react';
import {useFormik} from 'formik';
import {
    Box,
    FormControl,
    Hidden, IconButton,
    InputAdornment,
    InputBase,
    OutlinedInput, Paper,
    TextField,
    Typography
} from '@material-ui/core';
import {Search_icon} from '@src/components/elements/icons';
import {CustomButton} from '@src/components/elements/custom_button/CustomButton';
import {useTranslation} from 'next-i18next';
import {useRouter} from 'next/router';
import {cookies, getSearchTxt} from '@src/helpers';
import {CustomFormikProvider} from '@src/components/elements/custom_formik_provider/CustomFormikProvider';
import {transformLocations} from '@src/common_data/locations';
import {useDispatch} from 'react-redux';
import {setSearchTxtAction} from '@root/src/redux/slices/searchSlice';
import {useStyles} from './useStyles';


export const HeaderSearchForm: FC = () => {
    const {push} = useRouter();
    const dispatch = useDispatch();
    const {t} = useTranslation('common');

    const {categories} = useRouter().query;
    const searchTxtFromUrl = getSearchTxt(categories as string[]);

    const handleSubmit = ({searchTxt}) => {
        const userLocation = cookies.get('user_location');
        let location = 'uzbekistan';

        if (userLocation) {
            const {region, city} = userLocation;
            location = city
                       ? transformLocations[region.name][city.name]
                       : transformLocations[region.name].name;
        }

        const url = `/${location}${searchTxt !== '' ? `/q-${searchTxt}` : ''}`;

        push(url);
    };

    const handleChange = ({target: {value}}) => {
        setValues({searchTxt: value});
        dispatch(setSearchTxtAction(value));
    };

    const formik = useFormik({
        initialValues: {searchTxt: ''},
        onSubmit: handleSubmit
    });

    const {
        values,
        setValues
    } = formik;

    useEffect(() => {
        setValues({searchTxt: searchTxtFromUrl});
        dispatch(setSearchTxtAction(searchTxtFromUrl));
    }, []);

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
                        <Search_icon />
                    </IconButton>
                    <InputBase
                        inputProps={{'aria-label': 'search category'}}
                        id="input-base"
                        value={values.searchTxt}
                        onChange={handleChange}
                        placeholder={t('searchText')}
                        className={classes.input}
                    />
                    <Hidden mdDown>
                        <CustomButton type='submit' className={classes.searchButton}>
                            <Typography variant="subtitle2">
                                {t('searchBtn')}
                            </Typography>
                        </CustomButton>
                    </Hidden>
                </Paper>
            </CustomFormikProvider>
        </>
    );
};
