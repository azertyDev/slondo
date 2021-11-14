import {FC} from 'react';
import Head from "next/head";

type CustomHeadProps = {
    title: string,
    description?: string
}

export const CustomHead: FC<CustomHeadProps> = ({title, description = ''}) => {
    return (
        <Head key={2}>
            <title>{title}</title>
            {/*<meta name="robots" content="noindex"/>*/}
            <meta name="description" content={description}/>
            <meta property="og:site_name" content="Slondo"/>
            <meta property="og:type" content="website"/>
            <meta property="og:title" content={title} key="ogtitle"/>
            <meta property="og:description" content={description} key="ogdesc"/>
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1, minimum-scale=1, user-scalable=no"
            />
        </Head>
    );
};