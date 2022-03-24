import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';

// components
import BookList from './container/BookList';


// apollo client setup
const client = new ApolloClient({
  uri : "http://localhost:4000/graphql",
  
});

class App extends Component {
  render() {
    return (
        <div id="main">
          <h1>Ninja's Reading List</h1>
          <BookList/>
      </div>
    );
  }
}

export default App;
