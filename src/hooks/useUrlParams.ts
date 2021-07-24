import {useRouter} from "next/router";

export const useUrlParams = (): { title: string, model } => {
    const {title, model} = useRouter().query;
    const getParams = () => {
        if (model) {
            const {color, ...params} = JSON.parse(model as string);
            return params;
        }
        return null;
    };
    return {
        title: !!title ? JSON.parse(title as string) : '',
        model: getParams()
    };
};