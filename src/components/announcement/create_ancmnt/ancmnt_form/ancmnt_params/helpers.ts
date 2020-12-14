export const dataPrepare = (data, adParams?) => (
    Object.keys(data).reduce((acc, key) => {
        if (Array.isArray(data[key]) || data[key] === '') {
            acc[key] = data[key];
        }
        if (
            Array.isArray(data[key])
            && data[key].length
            && adParams !== undefined && adParams[key]
        ) {
            acc = {
                ...acc,
                ...dataPrepare(adParams[key])
            };
        }
        return acc;
    }, {})
);