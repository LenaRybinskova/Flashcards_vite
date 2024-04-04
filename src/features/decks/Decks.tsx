import { DecksList } from './DecksList/DecksList.tsx'
import { AddNewDeckForm } from './AddNewDeckForm/AddNewDeckForm.tsx'
import {useEffect} from 'react';
import {decksAPI} from './decks-api';
import {setDecksAC} from './decks-reducer';
import {AppDispatch, useAppDispatch} from '../../app/store';

export const Decks = () => {

  return (
    <div>
      <h1>Decks 🦝</h1>
      <AddNewDeckForm />
      <DecksList />
    </div>
  )
}
