import React from 'react';
import { PokerHandRate, RateableCards } from '../libs/poker';
import { connect } from 'react-redux';

const HandRate = ({ playersAndDeck }) => (
  <div>
    <div className="handRatePos">
      {`
        ${playersAndDeck.player.cards.length !== 0 ?
        "Player: "+PokerHandRate(new RateableCards(playersAndDeck.player.cards))[0] :
        playersAndDeck.player.cards}`
      }
    </div>
    <div className="opponenthandRatePos">
      {`
        ${playersAndDeck.opponent.cards.length !== 0 ?
        "Opponent: "+PokerHandRate(new RateableCards(playersAndDeck.opponent.cards))[0]:
        playersAndDeck.opponent.cards}`
      }
    </div>
  </div>
)
//why is player.cards.length starting value empty how can we avoid that?

const mapStateToProps = ({ playersAndDeck}) => ({ playersAndDeck })

export default connect(mapStateToProps, null)(HandRate);
