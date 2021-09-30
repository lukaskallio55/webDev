import React from 'react';
import SearchView from './components/SearchView';
import data from './data.json'

class App extends React.Component{

  constructor(props)
  {
    super(props);
    this.state = {
      items: data.items,
      productSearchString: ""
    }
  }
  onSearchFieldChange = (event) => {
    console.log('Keyboard event');
    console.log(event.target.value);
    this.setState({ productSearchString: event.target.value });
  }

  render()
  {
    return (
      <>
      Search <input type="text" onChange={ this.onSearchFieldChange } value={ this.state.productSearchString }/>
      <SearchView items={ this.state.items.filter((item) => item.product.includes(this.state.productSearchString)) } />
      </>
    );
  }
}

export default App;
