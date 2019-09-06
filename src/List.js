import React from 'react';
import Card from './Card';
import './list.css';


//props is a header and an array of cards
function List(props) {
    const cards = props.cards.map(card => <Card onDelete={(x, y)=> props.onDelete(x, y)} key={card.id} title={card.title} content={card.content} />)

    return (
        <section className="List">
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