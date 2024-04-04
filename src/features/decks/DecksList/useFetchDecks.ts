import {useAppDispatch, useAppSelector} from '../../../app/store';
import {DeckType} from '../decks-api';
import {selectDecks} from '../decks-selectors';
import {useEffect} from 'react';
import {fetchDecksTC} from '../decks-thunks';

export const useFetchDecks=()=>{
    const dispatch = useAppDispatch()
    const decks = useAppSelector<DeckType[]>(selectDecks)

    useEffect(() => {
        dispatch(fetchDecksTC())
    }, [dispatch])

    return {decks}
}