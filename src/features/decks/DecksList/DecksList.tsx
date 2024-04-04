import s from './DecksList.module.css'
import {useAppDispatch, useAppSelector} from '../../../app/store';
import {decksAPI, DeckType} from '../decks-api';
import {DeckItem} from './DeckItem/DeckItem';
import {useEffect} from 'react';
import {setDecksAC} from '../decks-reducer';
import {selectDecks} from '../decks-selectors';
import {fetchDecksTC} from '../decks-thunks';

export const DecksList = () => {
    const dispatch = useAppDispatch()
    const decks = useAppSelector<DeckType[]>(selectDecks)

    useEffect(() => {
        dispatch(fetchDecksTC())
    }, [])

    return (
        <ul className={s.list}>
            {decks.map(deck => <DeckItem deck={deck} key={deck.id}/>)}
        </ul>)


}

