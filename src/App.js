import React from 'react';
import List from './List';
import './app.css'



//props is store from store.js
function App(props) {
  console.log(props.store)

  for (let i = 0; i < props.store.lists.length; i++) {
    for (let j = 0; j < props.store.lists[i].cardIds.length; j++) {
      let card = props.store.lists[i].cardIds[j]
      console.log(props.store.lists[i].cardIds[j])
      props.store.lists[i].cardIds[j] = props.store.allCards[card];
    }
  }

  console.log(props.store)
  

  const lists = props.store.lists.map(list => <List header={list.header} cards={list.cardIds} />)

  return (
    <main className="App">
      <header className="App-header">
        <h1>Trelloyes!</h1>
      </header>
      <div className="App-list">
        {lists}
      </div>
    </main>
  );
}

    
  
    
    export default App;
    
   
 // const list = props.lists.cardIds.map(id => allCards[id])
  // console.log(list);

