import {useRouter} from "next/router";

type UseUrlParamsType = {
    post_id: string,
    title: string,
    params
}

export const useUrlParams = (): UseUrlParamsType => {
    const {post_id, title, model} = useRouter().query;
    const getParams = () => {
        if (model) {
            const {color, ...params} = JSON.parse(model as string);
            return params;
        }
        return null;
    };
    return {
        post_id: post_id as string,
        title: !!title ? JSON.parse(title as string) : '',
        params: getParams()
    };
};