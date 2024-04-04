import {Dispatch} from 'redux';
import {AddDeckParams, decksAPI} from './decks-api';
import {addDeckAC, setDecksAC} from './decks-reducer';

export const fetchDecksTC = () => (dispatch: Dispatch) => {
    decksAPI.fetchDecks().then(res => dispatch(setDecksAC(res.data.items)))
}

export const addDeckTC = (params:AddDeckParams) => async (dispatch: Dispatch) => {
    // c return санка явно возвращает промисе
    return decksAPI.addDeck(params).then(res => dispatch(addDeckAC(res.data)))
}