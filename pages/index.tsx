import {GetStaticProps} from 'next'
import {Home} from '../src/components/home/Home'
import {wrapper} from "../src/redux/store"


const Index = (props) => {
    return (
        <Home {...props} />
    )
}

export const getStaticProps: GetStaticProps = wrapper.getStaticProps(({store}) => {
    const {localization} = store.getState();
    return {
        props: {localization}
    }
});

export default Index;