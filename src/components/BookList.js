import React from 'react';
import Book from './Book'
import { ListGroup, ListGroupItem } from 'reactstrap';

function BookList({books, addToCart, removeFromCart}) {
  const bookList = books.map((book, i) => <Book removeFromCart={removeFromCart} addToCart={addToCart} key={book.id} book={book}/>)

  return (
    <div className="container">
      <ListGroup>
        <ListGroupItem>
          <div className="row">
            <div className="col">
              Title
            </div>
            <div className="col">
              Author
            </div>
            <div className="col">
              Pages
            </div>
            <div className="col">
              Price
            </div>
            <div className="col">
              Add to cart
            </div>
          </div>
        </ListGroupItem>
        {bookList}
      </ListGroup>
    </div>
  )
}

export default BookList;
