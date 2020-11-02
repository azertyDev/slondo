import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { MainContent } from './MainContent'
import { fetchCardData } from '@src/redux/slices/cardDataSlice'
import { RootState } from '@src/redux/rootReducer'

export const MainContentContainer = (props) => {
    const { t } = props
    const dispatch = useDispatch()
    const cardData = useSelector((store: RootState) => store.cardData)

    useEffect(() => {
        dispatch(fetchCardData({ itemsPerPage: 16, page: 1, type: 'ad' }))
    }, [])

    return (
        <MainContent t={t} cardData={cardData}/>
    )
}
