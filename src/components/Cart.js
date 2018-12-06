import React, { Component } from 'react';
import BookList from './BookList'

class Cart extends Component{
  render() {
    return (
      <BookList books={this.props.books} removeFromCart={this.props.removeFromCart}/>
    )
  }
}

export default Cart;
