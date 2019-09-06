import React from 'react';
import Card from './Card';
import './list.css';

//props is a header and an array of cards
function List(props) {
  const cards = props.cards.map(card => <Card onDelete={cardId => props.onDelete(cardId)} cardId={card.id} key={card.id} title={card.title} content={card.content} />)
  return (
    <section className="List" key={props.listId}>
      <button type="button" className="List-add-button" onClick={() => props.onAddRandomCard(props.listId)}>
        + Add Random Card
      </button>
      <header className="List-header">
        <h2>{props.header}</h2>
      </header>
      <div className="List-cards">
        {cards}
      </div>
    </section>
  )
}

export default List;