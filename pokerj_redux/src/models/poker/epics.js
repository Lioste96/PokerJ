import { ofType, combineEpics } from 'redux-observable';
import { pipe } from 'rxjs';
import {delay, mapTo, mergeMap, map, filter } from 'rxjs/operators';
import { Cards, CardsAndDeck } from '../../libs';
import { dealCards, changeCardsFulfilled, dealCardsSuccess, select, deselectCard, changeCards, showCards } from './actions';

const dealCardsEpic = (action$, state$) => action$.pipe(
  ofType(dealCards.type),
  map(() => {
    const playerCardsAndDeck = CardsAndDeck(state$.value.playersAndDeck.deck, 5);
    const opponentCardsAndDeck = CardsAndDeck(playerCardsAndDeck.deck, 5);
    return dealCardsSuccess({
      player: {cards: playerCardsAndDeck.cards, type: 'player'},
      opponent: { cards: opponentCardsAndDeck.cards, type:'opponent'},
      deck: opponentCardsAndDeck.deck,
      round: state$.value.playersAndDeck.round + 1
    });
  })
);
const changeCardsEpic = (action$, state$) => action$.pipe(
  ofType(changeCards.type),
  map(({payload: selected}) => {
    const cardsToKeep = state$.value.playersAndDeck.player.cards.filter(
      card=>!selected.includes(card)
    );
    const newCardsAndDeck = CardsAndDeck(
      state$.value.playersAndDeck.deck,
      selected.length
    );
    return changeCardsFulfilled({
      player: {cards: [...cardsToKeep, ...newCardsAndDeck.cards].sort(
        (x,y) => x.weight - y.weight), type: 'player'},
      deck: newCardsAndDeck.deck,
      round: state$.value.playersAndDeck.round + 1
    });
    })
)
const rootEpic = combineEpics(dealCardsEpic, changeCardsEpic);

export default rootEpic;
/*
case dealCards.type:
const playerCardsAndDeck = CardsAndDeck(state.deck, 5);
const opponentCardsAndDeck = CardsAndDeck(playerCardsAndDeck.deck, 5);
return {
  ...state,
  player: {cards: playerCardsAndDeck.cards},
  opponent: {cards: opponentCardsAndDeck.cards},
  deck: opponentCardsAndDeck.deck,
  round: state.round + 1
  //...action.payload\
};*/
