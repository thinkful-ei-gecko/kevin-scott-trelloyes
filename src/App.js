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
      <List onDelete={this.handleDelete} onAddRandomCard={this.handleAddRandomCard} header={list.header} key={list.id} listId={list.id}
      cards={list.cardIds.map(id => this.state.allCards[id])} />))
  }

  handleDelete = (cardId) => {
    let newLists = this.state.lists.map(list => {
      list.cardIds = list.cardIds.filter(id => id !== cardId);
      return list;
    });
    this.setState({
      lists: newLists,
    })
  }

  handleAddRandomCard = listId => {
    const newRandomCard = () => {
      const id = Math.random().toString(36).substring(2, 4)
        + Math.random().toString(36).substring(2, 4);
      return {
        id,
        title: `Random Card ${id}`,
        content: 'lorem ipsum',
      }
    }
    let card = newRandomCard(); 
    let theList = this.state.lists[Number(listId) - 1].cardIds;
    let newCardIdsList = [...theList, card.id];
    this.setState({
      allCards: {...this.state.allCards,  [card.id]: card},
      // lists: [...this.state.lists, mergedList],
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