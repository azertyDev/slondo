import React, {FC, MutableRefObject, useEffect, useRef, useState} from 'react';
import {useRouter} from 'next/router';
import {WithT} from 'i18next';
import {i18n} from '@root/i18n';
import {userAPI} from '@src/api/api';
import {ShowPost} from '@src/components/post/show_post/ShowPost';


export type SlidersRefType = {
    slider1?: MutableRefObject<any>;
    slider2?: MutableRefObject<any>;
    slider3?: MutableRefObject<any>;
    slider4?: MutableRefObject<any>;
};

export const ShowPostContainer: FC<WithT> = ({t}) => {

    const initValues = {id: null, name: ''};

    const initialPostData = {
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
            images: [{
                id: null,
                url: {
                    default: ''
                }
            }],
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
            }
        }
    };

    const initSlidersRefs: SlidersRefType = {
        slider1: useRef(),
        slider2: useRef(),
        slider3: useRef(),
        slider4: useRef()
    };

    const [postData, setPostData] = useState(initialPostData);
    const [parameters, setParameters] = useState({});
    const [slidersRefs, setSlidersRefs] = useState(initSlidersRefs);
    const [descHeight, setDescHeight] = useState(0);

    const url = useRouter().query.url as string;
    const splittedUrl = url.split('-');
    const params = splittedUrl.splice(-3);

    const lang = i18n.language;

    const fetchPostData = async () => {
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
                available_days,
                district,
                ...otherData
            } = await userAPI.getAddById(params[0], lang, params[1], params[2]);

            setParameters(otherData.model);

            if (available_days) {
                otherData.available_days = available_days.map(day => {
                    day.name = t(`common:${day.name}`);
                    return day;
                })
            }

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
                }
            });
        } catch (e) {
            setPostData({
                ...postData,
                error: e.message,
            });
        }
    };

    useEffect(() => {
        fetchPostData();
    }, [lang]);

    useEffect(() => {
        setSlidersRefs(initSlidersRefs);
    }, []);

    useEffect(() => {
        const height = document.getElementById('post-description').clientHeight;
        setDescHeight(height);
    }, [postData]);

    return <ShowPost
        t={t}
        slidersRefs={slidersRefs}
        descHeight={descHeight}
        postData={postData}
        parameters={parameters}
    />
};
