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
    case "DECKS/ADD_DECKS":
      return {...state, decks: [action.deck, ...state.decks]}
    default:
      return state
  }
}

export const setDecksAC=(items:DeckType[])=>({
  type: "DECKS/SET_DECKS" as const,
  items,
})

export const addDecksAC = (deck: DeckType):AddDecksACType => {
  return {
    type: "DECKS/ADD_DECKS",
    deck
  } as const
}

export type SetDecksACType=ReturnType<typeof setDecksAC>
export type AddDecksACType=ReturnType<typeof addDecksAC>

type DecksActions = SetDecksACType | AddDecksACType


/*export const setDecksAC=(items:DeckType[])=>({
    type: "DECKS/SET_DECKS",
    items,
} as const)*/