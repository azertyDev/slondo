import React, {FC, useEffect, useState} from 'react';
import {useRouter} from 'next/router';
import {WithT} from 'i18next';
import {i18n} from '@root/i18n';
import {userAPI} from '@src/api/api';
import {ShowPost} from '@src/components/post/show_post/ShowPost';


export const ShowPostContainer: FC<WithT> = ({t}) => {

    const initValues = {id: null, name: ''};

    const initialAdData = {
        isFetch: false,
        error: null,
        data: {
            id: null,
            title: '',
            price: '',
            currency: initValues,
            condition: initValues,
            created_at: null,
            expiration_at: null,
            number_of_views: null,
            sub_category_id: null,
            images: [],
            description: '',
            region: initValues,
            city: initValues,
            district: initValues,
            category: {
                id: null,
                name: '',
                mark: '',
                sub_category: [{
                    id: null,
                    name: ''
                }],
            },
            ads_type: {
                id: null,
                name: '',
                mark: '',
            },
            auction: {
                duration: '',
                display_phone: '',
                reserve_price: '',
                price_by_now: '',
            },
        },
    };

    const [postData, setPostData] = useState(initialAdData);
    const [parameters, setParameters] = useState({});

    const url = useRouter().query.url as string;
    const splittedUrl = url.split('-');
    const params = splittedUrl.splice(-3);

    const lang = i18n.language;

    const fetchAdData = async () => {
        try {
            setPostData({
                ...postData,
                isFetch: true,
            });

            const {
                title,
                currency,
                condition,
                images,
                description,
                region,
                city,
                district,
                ...otherData
            } = await userAPI.getAddById(params[0], lang, params[1], params[2]);

            setParameters(otherData.model);

            setPostData({
                ...postData,
                isFetch: false,
                data: {
                    title,
                    images,
                    description,
                    currency: currency ?? initValues,
                    condition: condition ?? initValues,
                    region: region ?? initValues,
                    city: city ?? initValues,
                    district: district ?? initValues,
                    ...otherData,
                },
            });
        } catch (e) {
            setPostData({
                ...postData,
                error: e.message,
            });
        }
    };

    useEffect(() => {
        fetchAdData();
    }, [lang])

    return <ShowPost
        t={t}
        postData={postData}
        parameters={parameters}
    />
};
