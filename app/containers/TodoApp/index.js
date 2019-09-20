/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { Container } from 'reactstrap';
import { NavList, NavListItem } from './style';

/* eslint-disable react/prefer-stateless-function */
export class HomePage extends React.PureComponent {
  constructor(props){
    super(props);
    this.state = {
      newItem: "",
      list : []
    }
  }

  // Add Item method
  addItem(todoValue){
    if(todoValue !== ""){
      const newItem = {
        id : Date.now(),
        value: todoValue,
        isDone: false
      };
      // triple Dots means you want to append all the existing values in it.
      const list = [...this.state.list];
      list.push(newItem);
      this.setState({ list, newItem: "" });
    }
  }

  deleteItem(id){
    const list = [...this.state.list];
    const updatedList = list.filter(item => item.id !== id);
    this.setState({list: updatedList})
  }

  updateInput(input){
    this.setState({newItem:input});
  }
  render() {
    return (
      <article>
        <Helmet>
          <title>ToDo Application</title>
          <meta
            name="description"
            content="A React.js Boilerplate application homepage"
          />
        </Helmet>
        <Container className="my-5">
          <h1 className="mb-4 text-center">ToDo Application</h1>
          <p>Please add an Item...</p> 

          <div>
            <div className="d-flex">
              <input type="text" className="form-control mr-3" placeholder="Write a Todo" value={this.state.newItem} onChange={e => this.updateInput(e.target.value)} required/>
              <button type="button" className="btn btn-primary" onClick={() => this.addItem(this.state.newItem)} disabled={!this.state.newItem.length}>Add ToDo</button>
            </div>
            <div className="todo-list">
              <NavList>
                {this.state.list.map(item => {
                  return(
                    <NavListItem key={item.id}>
                      <div>
                        <input type="checkbox" className="mr-2" name="idDone" checked={item.isDone} onChange={() => {}} />
                        {item.value}
                      </div>
                      <button type="button" className="btn btn-danger" onClick={() => this.deleteItem(item.id)}>Delete</button>
                    </NavListItem>
                  );
                })}
              </NavList>
            </div>

          </div> 
        </Container>
      </article>
    );
  }
}

export default HomePage;
