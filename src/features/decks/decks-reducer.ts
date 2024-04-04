import {DeckType} from './decks-api';




const initialState = {
  decks: [] as DeckType[], // todo: add type
  searchParams: {
    name: '',
  },
}

type DecksState = typeof initialState

export const decksReducer = (state: DecksState = initialState, action: DecksActions): DecksState => {
  switch (action.type) {
    case "DECKS/SET_DECKS":
      return {...state, decks: action.items}
    default:
      return state
  }
}

export const setDecksAC=(items:DeckType[])=>({
  type: "DECKS/SET_DECKS" as const,
  items,
})

/*export const setDecksAC=(items:DeckType[])=>({
    type: "DECKS/SET_DECKS",
    items,
} as const)*/

type DecksActions = ReturnType<typeof setDecksAC>


