import React from 'react';
import { connect } from 'react-redux'
import { selectCard } from '../models';
import { deselectCard } from '../models';

const Card = ({card, type, onClick, selected, playersAndDeck}) => {
  if (type==="player"){
    if(playersAndDeck.round === 1){
      return(
        <label className={`card rank-${(card.rank).toLowerCase()} ${card.suit}`}>
          <span className="rank">{card.rank}</span>
          <span className="suit"></span>
          <input
          onClick = {()=>onClick(selected)}
          type="checkbox"
          value="select"
          id={`card rank-${card.rank} ${card.suit}`}
          />
        </label>
      )
    }
    else{
      return(
        <a className={`card rank-${(card.rank).toLowerCase()} ${card.suit}`}>
          <span className="rank">{card.rank}</span>
          <span className="suit"></span>
        </a>
      )
    }
  }
  else{
    return(
      <a className={`card rank-${(card.rank).toLowerCase()} ${card.suit}`}>
        <span className="rank">{card.rank}</span>
        <span className="suit"></span>
      </a>
    )
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick:(selected)=>{
    if (selected.includes(ownProps.card)){
      dispatch(deselectCard(ownProps.card));
    }
    else{
      dispatch(selectCard(ownProps.card));
    }
  }
})

const mapStateToProps = ({ playersAndDeck, selected }) => ({
  playersAndDeck,
  selected
})

export default connect(mapStateToProps, mapDispatchToProps)(Card);
