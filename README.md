HW4:
dispath( TC())  return promise

надо сделать санку async и добавить return и в компоненте с результатом диспач ТС работать как с промисом

HW3: 

отдельную часть логики лучше вынести в кастомных хук
```
    const dispatch = useAppDispatch()
    const decks = useAppSelector<DeckType[]>(selectDecks)

    useEffect(() => {
        dispatch(fetchDecksTC())
    }, [dispatch])
```

```
export const useFetchDecks=()=>{
    const dispatch = useAppDispatch()
    const decks = useAppSelector<DeckType[]>(selectDecks)

    useEffect(() => {
        dispatch(fetchDecksTC())
    }, [dispatch])

    return {decks}
}
```

HW2: 

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

# Дополнительный урок 01 для спринта 04

- [Swagger документация](https://api.flashcards.andrii.es/docs)
- [Пример готового проекта](https://04-sprint-01-add-lesson-flashcards.vercel.app/)

