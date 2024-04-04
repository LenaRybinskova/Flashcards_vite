import { DecksList } from './DecksList/DecksList.tsx'
import { AddNewDeckForm } from './AddNewDeckForm/AddNewDeckForm.tsx'
import {useEffect} from 'react';
import {decksAPI} from './decks-api';
import {setDecksAC} from './decks-reducer';
import {AppDispatch, useAppDispatch} from '../../app/store';

export const Decks = () => {
    console.log("Decks")

    const dispatch = useAppDispatch()
    useEffect(()=>{
        decksAPI.fetchDecks().then(res => dispatch(setDecksAC(res.data.items)))
    },[])

  return (
    <div>
      <h1>Decks 🦝</h1>
      <AddNewDeckForm />
      <DecksList />
    </div>
  )
}
