import React, { Component } from 'react';
import { ListGroupItem, Button } from 'reactstrap';

class Book extends Component {
  changeCart = (id) => {
    if(this.props.addToCart) {
      this.props.addToCart(id)
    } else {
      this.props.removeFromCart(id)
    }
  }
  render() {
    const book = this.props.book
    let buttonText =""
    if(this.props.addToCart) {
      buttonText = "Add to cart"
    } else {
      buttonText = "Remove from cart"
    }

    return (
      <ListGroupItem>
        <div className="row">
          <div className="col">
            {book.title}
          </div>
          <div className="col">
            {book.author}
          </div>
          <div className="col">
            {book.pages}
          </div>
          <div className="col">
            ${book.price}
          </div>
          <div className="col">
            <Button onClick={() => this.changeCart(book.id)} color="primary"> {buttonText} </Button>
          </div>
        </div>
      </ListGroupItem>
    )
  }
}

export default Book;
