import React from 'react';
import Card from './Card';
import './list.css';


//props is a header and an array of cards
function List(props) {
    const cards = props.cards.map(card => <Card title={card.title} content={card.content} />)

    return (
        <section class="List">
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