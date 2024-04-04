import {Dispatch} from 'redux';
import {decksAPI} from './decks-api';
import {addDecksAC, setDecksAC} from './decks-reducer';

export const fetchDecksTC = () => (dispatch: Dispatch) => {
    decksAPI.fetchDecks().then(res => dispatch(setDecksAC(res.data.items)))
}

export const addDecksTC = (name: string) => (dispatch: Dispatch) => {
    decksAPI.addDeck(name).then(res => dispatch(addDecksAC(res.data)))
}