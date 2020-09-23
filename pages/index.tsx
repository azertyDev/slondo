import React from 'react'
import {GetStaticProps} from 'next'
import {Home} from '../src/components/home/Home'
import {wrapper} from "../src/redux/store";
import {fetchMainSliderImgs} from "../src/redux/actions/mainSliderActions";


const Index = (props) => {
    return (
        <Home {...props} />
    )
}

// export const getStaticProps: GetStaticProps = wrapper.getStaticProps(async ({store}) => {
//     store.dispatch(await fetchMainSliderImgs());
//     const {mainSlider} = store.getState();
//     return {
//         props: {images: mainSlider.images},
//     }
// });

export default Index;