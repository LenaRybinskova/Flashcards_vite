import s from './DecksList.module.css'
import {DeckItem} from './DeckItem/DeckItem';
import {useFetchDecks} from './useFetchDecks';

export const DecksList = () => {

    const {decks} = useFetchDecks()

    return (
        <ul className={s.list}>
            {decks.map(deck => <DeckItem deck={deck} key={deck.id}/>)}
        </ul>)


}

