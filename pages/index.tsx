import React from 'react'
import {GetStaticProps} from 'next'
import {useQuery} from "@apollo/client"
import {initializeApollo} from '../apollo/client'
import {Home, query} from '../src/components/home/Home'


const Index = () => {
    const {data} = useQuery(query);
    return (
        <Home data={data}/>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const apolloClient = initializeApollo()

    await apolloClient.query({query})

    return {
        props: {
            initialApolloState: apolloClient.cache.extract(),
        },
    }
};

export default Index;