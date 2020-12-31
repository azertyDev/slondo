import React, { FC, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { WithT } from 'i18next';
import { i18n } from '@root/i18n';
import { userAPI } from '@src/api/api';
import { ShowAncmntLot } from '@src/components/announcement/show_ancmnt_lot/ShowAncmntLot';

const initValues = { id: null, name: '' };

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
        ads_type: {
            id: null,
            name: '',
            mark: '',
        },
        parent: {
            id: null,
            name: '',
            mark: '',
        },
        child: {
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

export const ShowAncmntLotContainer: FC<WithT> = ({ t }) => {
    const [adData, setAdData] = useState(initialAdData);
    const [parameters, setParameters] = useState({});

    const url = useRouter().query.url as string;
    const splittedUrl = url.split('-');

    const lang = i18n.language;

    const ancmntType = adData.data.ads_type.mark;

    const fetchAdData = async () => {
        try {
            setAdData({
                ...adData,
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
            } = await userAPI.getAddById(
                splittedUrl[splittedUrl.length - 1],
                lang,
            );

            setAdData({
                ...adData,
                isFetch: false,
            });

            setParameters({
                ...otherData[otherData.parent.mark],
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
                    ...otherData,
                },
            });
        } catch (e) {
            setAdData({
                ...adData,
                error: e.message,
            });
        }
    };

    useEffect(() => {
        fetchAdData();
    }, []);

    return (
        <ShowAncmntLot
            t={t}
            data={adData.data}
            parameters={parameters}
            ancmntType={ancmntType}
        />
    );
};
