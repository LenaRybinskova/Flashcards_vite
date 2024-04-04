import {DeckType} from './decks-api';




const initialState = {
  decks: [] as DeckType[],
  searchParams: {
    name: '',
  },
}

type DecksState = typeof initialState

export const decksReducer = (state: DecksState = initialState, action: DecksActions): DecksState => {
  switch (action.type) {
    case "DECKS/SET_DECKS":
      return {...state, decks: action.items}
    case "DECKS/ADD_DECK":
      return {...state, decks: [action.deck, ...state.decks]}
    default:
      return state
  }
}

export const setDecksAC=(items:DeckType[])=>({
  type: "DECKS/SET_DECKS" as const,
  items,
})

export const addDeckAC = (deck: DeckType) => {
  return {
    type: "DECKS/ADD_DECK" as const,
    deck
  }
}

export type SetDecksACType={
  type:"DECKS/SET_DECKS",
  items:DeckType[]
}

export type AddDecksACType={
  type: "DECKS/ADD_DECK",
  deck:DeckType
}


type DecksActions = SetDecksACType | AddDecksACType


/*export const setDecksAC=(items:DeckType[])=>({
    type: "DECKS/SET_DECKS",
    items,
} as const)*/