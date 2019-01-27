import { Action } from '../../libs'

export const turnCard = Action('TURN_CARD');

export const dealCards = Action('DEAL_CARDS');

export const resetGame = Action('RESET_GAME');

export const selectCard = Action('SELECT_CARD');

export const deselectCard = Action('DESELECT_CARD');

export const changeCards = Action('CHANGE_CARDS');

export const dealCardsSuccess = Action ('DEAL_CARDS_SUCCESS');

export const changeCardsFulfilled = Action ('CHANGE_CARDS_FULFILLED');

export const showCards = Action ('SHOW_CARDS');
