import React from 'react';
import List from './List';
import './app.css'
import STORE from './store'



//props is store from store.js
class App extends React.Component {
  state = {
    lists: STORE.lists,
    allCards: STORE.allCards
  }
  

  generateList() {
    return this.state.lists.map(list => (
      <List onDelete={this.handleDelete} header={list.header} key={list.id} 
      cards={list.cardIds.map(id => this.state.allCards[id])} />))
  }


  handleDelete = (listId, cardId) => {

    let allLists = this.state.lists.filter(list => list.id !== listId)

    let list = this.state.lists.filter(list => list.id === listId);
    list[0].cardIds = list[0].cardIds.filter(id => id !== cardId)
    
    console.log([list[0], ...allLists])



    this.setState({
      lists: [list[0], ...allLists]
  })
  }






  render() {

    return (
      <main className="App">
        <header className="App-header">
          <h1>Trelloyes!</h1>
        </header>
        <div className="App-list">
          {this.generateList()}
        </div>
      </main>
    );
  }
}




export default App;