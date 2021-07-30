import {NextPage} from "next";
import {PageNotFound} from "@src/components/page_not_found/PageNotFound";

interface ErrorProps {
    statusCode: number;
}

const ErrorPage: NextPage<ErrorProps> = ({statusCode}) => {
    switch (statusCode) {
        case 404:
            return <PageNotFound/>;
        default:
            return <div>
                <h1>Server error</h1>
                <h1>Error: {statusCode}</h1>
            </div>;
    }
};

ErrorPage.getInitialProps = ({res}) => {
    const statusCode = res?.statusCode || 500;
    return {statusCode};
};

export default ErrorPage;