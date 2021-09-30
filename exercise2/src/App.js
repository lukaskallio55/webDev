import React from "react";
import Title from './components/Title';
import ShoppingList from './components/ShoppingList';
import styles from './App.module.css';
import './App.css';

/* A ES6 class style stateful component for the shopping list application */
class App extends React.Component {

  constructor(props)
  {
    /* You should call super(props) before any other statement. 
       Otherwise, this.props will be undefined in the constructor, which can lead to bugs.
    */
    super(props);

    this.state = {
      items: [
        { id: 1, value: 'Milk', qty: 5, unit: 'ltr' },
        { id: 2, value: 'Bananas', qty: 6, unit: 'pcs' },
        { id: 3, value: 'Bread', qty: 3, unit: 'x' },
        { id: 4, value: 'Eggs', qty: 16, unit: 'x' }
      ]
    };

    this.randNum = () => {
      return Math.floor(Math.random() * 9) + 1
    }

    this.addSomething = (name,  unit1) => {
      const result = this.state.items.findIndex(d => d.value == name)
      if (result == -1) {
        this.setState({items: [...this.state.items, {id: this.state.items.length + 1, value: name, qty: this.randNum(), unit: unit1}]})
      } else {
        let items = [...this.state.items]
        let item = {...items[items.findIndex(d => d.value == name)]}
        item.qty += this.randNum()
        items[items.findIndex(d => d.value == name)] = item
        this.setState({items})
      }
    } 
  }

  render()
  {

    const { applicationDescription, applicationName } = this.props;
    return <div className={ styles.shoppingList }>
      <Title 
        applicationDescription={ applicationDescription }
        applicationName={ applicationName }
      />
      <ShoppingList items={ this.state.items } />
      <button onClick={ () => this.addSomething('Carrots', 'x')}> addCarrots </button>
      <button onClick={ () => this.addSomething('Beer', 'x')}> addBeer </button>
      <button onClick={ () => this.addSomething('Juice', 'ltr')}> addJuice </button>
      <button onClick={ () => this.addSomething('Apples', 'x')}> addApples </button>

 
    </div>
  }
}

export default App;