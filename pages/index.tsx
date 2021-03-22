import React from "react";
import {Home} from '@src/components/home/Home';


const HomePage = (props) => <Home {...props}/>;

HomePage.getInitialProps = async () => {
    return {test: 'test'}
}

export default HomePage;