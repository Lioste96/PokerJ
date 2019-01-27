import React from 'react';
import { StringRating } from '../libs/poker';
import { connect } from 'react-redux';

const Winner = ({ playersAndDeck }) => {

  if(playersAndDeck.round === 2){
    if (StringRating(playersAndDeck.opponent.cards) > StringRating(playersAndDeck.player.cards)){
      return(
        <div className="winner">
          {"Winner: Opponent"}
        </div>
      )
    }
  else if (StringRating(playersAndDeck.opponent.cards) < StringRating(playersAndDeck.player.cards)){
      return(
        <div className="winner">
          {"Winner: Player"}
        </div>
      )
    }
    else{
      return(
        <div className="winner">
          {"Split"}
        </div>
      )
    }
  } else{
    return(
      <div></div>
    )
  }
};

const mapStateToProps = ({ playersAndDeck }) => ({ playersAndDeck })

export default connect(mapStateToProps, null)(Winner);
