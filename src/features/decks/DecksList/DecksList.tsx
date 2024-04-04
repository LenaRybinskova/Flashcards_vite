import s from './DecksList.module.css'
import {useAppSelector} from '../../../app/store';
import {DeckType} from '../decks-api';
import {DeckItem} from './DeckItem/DeckItem';

export const DecksList = () => {
    const decks = useAppSelector<DeckType[]>(state => state.decksReducer.decks)

    return (
        <ul className={s.list}>
            {decks.map(deck => <DeckItem deck={deck}/>)}
        </ul>)


}

