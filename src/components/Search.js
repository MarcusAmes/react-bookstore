import React, { Component } from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';

class Search extends Component {
  state = { search: ""}

  onChange = ({target: {name, value}}) => {
    this.setState(() => {
      let obj = {}
      obj[name] = value;
      return obj
    }, () => {
      this.props.change(this.state)
    })
  }

  render() {
    return (
      <div>
        <Form>
          <FormGroup tag="fieldset">
            <legend>Filter</legend>
            <FormGroup check>
              <Label check>
                <Input onChange={(e) => this.onChange(e)} type="radio" name="filter" value="title"/>{' '}
                Title
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input onChange={(e) => this.onChange(e)} type="radio" name="filter" value="author"/>{' '}
                Author
              </Label>
            </FormGroup>
          </FormGroup>
          <FormGroup>
            <Input onChange={(e) => this.onChange(e)} name="search" type="text" placeholder="Search" />
          </FormGroup>
        </Form>
      </div>
    )
  }
}

export default Search;
