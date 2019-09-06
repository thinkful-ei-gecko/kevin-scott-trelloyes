import React from 'react';
import './card.css';

//props is title and content and id
function Card(props) {
  return (
    <div className="Card" key={props.cardId}>
      <button type="button" onClick={() => props.onDelete(props.cardId)}>delete</button>
      <h3>{props.title}</h3>
      <p>{props.content}</p>
    </div>
  )
}

export default Card;