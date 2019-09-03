import React from 'react';
import ReactDOM from 'react-dom';
import List from './List'
import Card from './Card'
import store from './store';

//props is store from store.js
function App(props) {

  props.lists.forEach(list => list.cardIds.map(card => card = <Card title = {allCards[card].title} content={allCards[card].content} />));

  const lists = props.lists.map(list => )

  return (
    <main className='App'>
      {/* content goes here */}
    </main>
  );
}

export default App;

/*
<section class="List">
  <header class="List-header">
    <h2>First list</h2>
  </header>
  <div class="List-cards">
    {lists}
  </div>
  */
