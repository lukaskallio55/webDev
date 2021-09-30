import React from 'react';
import AdminView from './AdminView';
import SearchView from './components/SearchView';
import data from './data.json'
import axios from 'axios';

class App extends React.Component{

  constructor(props)
  {
    super(props);
    this.state = {
      items: [],
      productSearchString: "",
      adminModeActive: false,

      newItemName: "",
      newItemPrice: "",
      newItemManufacturer: ""
    }
  }

  componentDidMount(){
    axios.get('http://localhost:4000/products')
    .then((response)=>{
      console.log(response);
      this.setState({ items: response.data.items})
    })
    .catch((err) => console.log(err));
  }
  
  onSearchFieldChange = (event) => {
    console.log('Keyboard event');
    console.log(event.target.value);
    this.setState({ productSearchString: event.target.value });
  }

  addNewItem = (name, manufacturer, price, image) => {
    axios.post('http://localhost:4000/products', {
      name: name,
      manufacturer: manufacturer,
      price: price,
      image: image
    })
    .then((response)=>{
      let newItems = [...this.state.items];
      console.log(response);
      newItems = response;
      this.state({
        items: newItems
      })
    })
    .catch((err) => console.log(err));
  }

  deleteItem = (id) => {
    axios.delete('http://localhost:4000/products', { data: {id: id}});
  }

  render()
  {
    return (
      <>
      { this.state.adminModeActive ?
      <>
        <AdminView 
        disableAdminMode={() => this.setState({adminModeActive: false})}
        addNewItem={ this.addNewItem }
        items={ this.state.items }
        deleteItem={ this.deleteItem }
        />
        </>
        :
        <>
        <div>
            Search <input type="text" onChange={ this.onSearchFieldChange } value={ this.state.productSearchString }/>
          </div>
          <SearchView 
            items={ this.state.items.filter((item) => item.name.includes(this.state.productSearchString)) } 
          />
          <button onClick={() => this.setState({adminModeActive: !this.state.adminModeActive})}>Admin mode</button>
        </>
      }
      
      </>
    );
  }
}

export default App;
