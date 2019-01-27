import React from 'react';
import { Hand, HandRate, Deck, OpponentHand, Reset, ChangeButton, Winner } from './components';
import './CSSCards/cards.css';

const App = () => (
  <div className="background playingCards simpleCards">
    <Hand />
    <HandRate />
    <OpponentHand />
    <Deck />
    <Reset />
    <ChangeButton />
    <Winner />
  </div>
);

export default App;
