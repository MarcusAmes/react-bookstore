import React, { Component } from 'react';
import './App.css';
import BookList from './components/BookList';
import Search from './components/Search';
import Cart from './components/Cart';

class App extends Component {

  state = {
    books: [],
    filter: {}
  }

  async componentDidMount() {
    const response = await fetch('http://localhost:8082/api/books')
    const json = await response.json()
    this.setState({books: json})
  }

  filtered = () => {
    const options = this.state.filter
    if(options) {
      let newArr = [];
      const books = this.state.books;
      if(options.filter === "title") {
        newArr = books.filter((book) => book.title.toLowerCase().includes(options.search.toLowerCase()))
      } else if (options.filter === "author") {
        newArr = books.filter((book) => book.author.toLowerCase().includes(options.search.toLowerCase()))
      } else {
        return this.state.books
      }
      return newArr;
    } else {
      return this.state.books
    }
  }

  changeFilter = (options) => {
    this.setState({filter: options})
  }

  addToCart = (id) => {
    this.setState((prevState) => {
      let index = prevState.books.findIndex((book) => book.id === id)
      let newBook = prevState.books.slice(index, index+1)
      newBook[0].inCart = true;
      prevState.books.splice(index,1,newBook[0])
      return {books: prevState.books}
    })
  }

  removeFromCart = (id) => {
    this.setState((prevState) => {
      let index = prevState.books.findIndex((book) => book.id === id)
      let newBook = prevState.books.slice(index, index+1)
      newBook[0].inCart = false;
      prevState.books.splice(index,1,newBook[0])
      return {books: prevState.books}
    })
  }

  render() {
    const allBooks = this.state.books;
    const books = this.filtered()
    const cart = allBooks.filter(book => book.inCart)
    const total = cart.reduce((acc, inCart) => acc + inCart.price,0)


    return (
      <div className="App">
        <Search change={this.changeFilter} filter={this.filter}/>
        <div style={{display: "flex"}}>
          <BookList books={books} addToCart={this.addToCart}/>
          <Cart books={cart} removeFromCart={this.removeFromCart}/>
          <p>Total ${total}</p>
        </div>
      </div>
    )
  }
}

export default App;
