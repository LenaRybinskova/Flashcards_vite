import { DecksList } from './DecksList/DecksList.tsx'
import { AddNewDeckForm } from './AddNewDeckForm/AddNewDeckForm.tsx'
import {useEffect} from 'react';
import {decksAPI} from './decks-api';

export const Decks = () => {
    console.log("Decks")
    useEffect(()=>{
        decksAPI.fetchDecks().then(res => console.log(res.data.items))
    },[])

  return (
    <div>
      <h1>Decks 🦝</h1>
      <AddNewDeckForm />
      <DecksList />
    </div>
  )
}
