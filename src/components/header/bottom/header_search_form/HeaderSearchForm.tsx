import {FC, useEffect} from 'react';
import {useFormik} from 'formik';
import {Hidden, Typography} from '@material-ui/core';
import {FilterIcon, Search_icon} from '@src/components/elements/icons';
import {CustomButton} from '@src/components/elements/custom_button/CustomButton';
import {useTranslation} from 'next-i18next';
import {useRouter} from 'next/router';
import {cookies, getSearchTxt} from '@src/helpers';
import {CustomFormikProvider} from '@src/components/elements/custom_formik_provider/CustomFormikProvider';
import {FormikField} from '@src/components/elements/formik_field/FormikField';
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
        const location = userLocation === undefined
                         ? 'uzbekistan'
                         : transformLocations.cities[userLocation?.city?.name]
                             ?? transformLocations.regions[userLocation.region.name];

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
        <div className={classes.root}>
            <CustomFormikProvider formik={formik}>
                <Search_icon/>
                <FormikField
                    t={t}
                    size='small'
                    name='searchTxt'
                    className="search-input"
                    placeholder={t('searchText')}
                    onChange={handleChange}
                    value={values.searchTxt}
                />
                <Hidden smDown>
                    <CustomButton type='submit' className="search-button">
                        <Typography variant="subtitle2">
                            {t('searchBtn')}
                        </Typography>
                    </CustomButton>
                </Hidden>
                <Hidden mdUp>
                    <FilterIcon/>
                </Hidden>
            </CustomFormikProvider>
        </div>
    );
};
