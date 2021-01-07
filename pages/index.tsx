import React, {FC} from "react";
import {Home} from '@src/components/home/Home';


const HomePage: FC = (props) => {
    return (
        <Home {...props} />
    )
};

export default HomePage;