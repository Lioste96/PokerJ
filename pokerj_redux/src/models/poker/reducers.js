import {combineReducers} from 'redux';
import { selectCard, deselectCard, changeCardsFulfilled, changeCards, resetGame, dealCardsSuccess } from './actions';
import { Cards, CardsAndDeck } from '../../libs/poker';

const game = {
  player: {cards: []},
  opponent: {cards: [], type: "opponent"},
  deck: Cards,
  selected: [],
  round: 0
}

const playersAndDeck = (state=game, action) =>{
  switch(action.type){
    case dealCardsSuccess.type:
      return {
        ...state,
        ...action.payload
      };
    case changeCardsFulfilled.type:
      return {
        ...state,
        ...action.payload
      };
    case resetGame.type:
      return {...game}
    default:
      return state;
  }
}

const selected = (selected=[], action) => {
  switch(action.type){
    case selectCard.type:
      return [...selected, action.payload]
    case deselectCard.type:
      return [...selected.slice(0, selected.indexOf(action.payload),
        ...selected.slice(selected.indexOf(action.payload)+1)
      )]
    case resetGame.type:
      return [];
    default:
      return selected;
    }
  }

const combReducers = combineReducers ({
  playersAndDeck,
  selected,
});

export default combReducers;
