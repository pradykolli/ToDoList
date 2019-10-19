import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavbar from './Components/AppNavbar';
import ShoppingList from './Components/ShoppingList';
import { Provider } from 'react-redux';
import store from './store'
import ItemModal from './Components/ItemModal'
import './App.css';
import {Container} from 'reactstrap';

class App extends Component{
  render(){
    return(
      <Provider store={store}>
        <div className="App">
          <AppNavbar></AppNavbar>
          <Container>
            <ItemModal></ItemModal>
            <ShoppingList></ShoppingList>
          </Container>
        </div>
      </Provider>
    );
  }
}

export default App;
