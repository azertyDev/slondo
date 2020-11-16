import React, {useEffect, useState} from 'react'
import {userAPI} from "@src/api/api";
import {i18n} from '@root/i18n';
import {useRouter} from 'next/router';
import {ShowAdLot} from "@src/components/advertisement/show_advertisement/ShowAdLot";


const initValues = {id: null, name: ''};

const initialAdData = {
    isFetch: false,
    error: null,
    data: {
        id: null,
        title: '',
        currency: initValues,
        condition: initValues,
        created_at: null,
        expiration_at: null,
        number_of_views: null,
        images: [],
        description: '',
        region: initValues,
        city: initValues,
        district: initValues,
    },
};

export const ShowAdLotContainer = ({t}) => {
    const [adData, setAdData] = useState(initialAdData);
    const adsId = useRouter().query.id;
    const lang = i18n.language;

    const fetchAdData = async () => {
        try {
            setAdData({
                ...adData,
                isFetch: true
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
            } = await userAPI.getAddById(adsId, lang);

            setAdData({
                ...adData,
                isFetch: false
            });

            setAdData({
                ...adData,
                data: {
                    title,
                    images,
                    description,
                    currency: currency ?? initValues,
                    condition: condition ?? initValues,
                    region: region ?? initValues,
                    city: city ?? initValues,
                    district: district ?? initValues,
                    ...otherData
                }
            });

        } catch (e) {
            setAdData({
                ...adData,
                error: e.message
            });
        }
    };

    useEffect(() => {
        fetchAdData()
    }, [])

    return (
        <>
            <ShowAdLot adData={adData} t={t}/>
        </>
    )
}