import { combReducers } from './reducer';
import { rootEpic } from './epic';
import { turnCard, dealCards, dealCardsSuccess, resetGame, selectCard, changeCards, deselectCard } from './actions';

export {
  combReducers,
  rootEpic,
  turnCard,
  dealCards,
  dealCardsSuccess,
  resetGame,
  selectCard,
  changeCards,
  deselectCard
};
