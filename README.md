# Дополнительный урок 01 для спринта 04

- [Swagger документация](https://api.flashcards.andrii.es/docs)
- [Пример готового проекта](https://04-sprint-01-add-lesson-flashcards.vercel.app/)

```
export const setDecksAC=(items:DeckType[])=>({
   type: "DECKS/SET_DECKS" as const,
   items,
})
```

```
export const setDecksAC=(items:DeckType[])=>({
    type: "DECKS/SET_DECKS",
    items,
} as const) 
```