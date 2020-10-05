const uzLocal = {
    lang: 'uz',
    header: {
        topHeader: {
            location: 'Manzil',
            region: 'Mintaqani tanlang',
            help: 'Yordam',
            shops: 'Do\'konlar',
            forBusiness: 'Biznes uchun'
        },
        bottomHeader: {}
    },
    home: {
        main: {},
    },
    footer: {}
};

export const localizationActionTypes = {
    SET_UZ_LOCAL: 'SET_UZ_LOCAL',
    SET_RU_LOCAL: 'SET_RU_LOCAL',
}

export const setLocal = local => {
    switch (local) {
        case 'uz':
            return {
                type: localizationActionTypes.SET_UZ_LOCAL,
                payload: uzLocal
            }
        case 'ru':
            return {
                type: localizationActionTypes.SET_RU_LOCAL
            }
    }
};