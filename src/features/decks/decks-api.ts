import axios from 'axios'

export const instance = axios.create({
    baseURL: 'https://api.flashcards.andrii.es',
    headers: {
        'x-auth-skip': true,
    },
})


export const decksAPI = {
    fetchDecks() {
        return instance.get<FetchResponseType>('/v2/decks')
    }
}

export type ErrorResponseType = {
    statusCode: number,
    message: string,
    timestamp: string,
    path: string
}

export type FetchResponseType = {
    items: DeckType[],
    pagination: PaginationType
}

export type AuthorType={
    id: string,
    name: string
}

export type DeckType ={
    author: AuthorType,
    id: string,
    userId: string,
    name: string,
    isPrivate: boolean,
    cover: string,
    created: string,
    updated: string,
    cardsCount: number
}
export type PaginationType={
    currentPage: number,
    itemsPerPage: number,
    totalPages: number,
    totalItems: number
}