import React from 'react';
import ReactDOM from 'react-dom';
import List from './List'
import Card from './Card'
import store from './store';

//props is store from store.js
function App(props) {

  const lists = store.lists.map(list => {<list 
    key={props.list.Id}
    header={props.list.header}
    cards={list.cardIds.map(id => allCards[id])}
  />})

      return  (
      <main className="App">
        <header>
          <h1>Trelloyes</h1> 
        </header>
       <div className='app-list'>
          {lists}
       </div>
      </main>
      )


      }
    
  
    
    export default App;
    
   
 // const list = props.lists.cardIds.map(id => allCards[id])
  // console.log(list);

  // // props.lists.forEach(list => list.cardIds.map(card => allCards.id));

  // // const lists = props.lists.map(list => )