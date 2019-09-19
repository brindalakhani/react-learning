/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import { Helmet } from 'react-helmet';

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
        <div className="container">
          <h1>ToDo Application</h1>
          <p>Add an Item...</p> 

          <div>
            <input type="text" className="form-control" placeholder="Write a Todo" value={this.state.newItem} onChange={e => this.updateInput(e.target.value)} required/>
            <button type="button" className="btn btn-primary" onClick={() => this.addItem(this.state.newItem)} disabled={!this.state.newItem.length}>Add ToDo</button>
            <div className="todo-list">
              <ul>
                {this.state.list.map(item => {
                  return(
                    <li key={item.id}>
                      <input type="checkbox" name="idDone" checked={item.isDone} onChange={() => {}} />
                      {item.value}
                      <button type="button" className="btn btn-warning" onClick={() => this.deleteItem(item.id)}>Delete</button>
                    </li>
                  );
                })}
              </ul>
            </div>

          </div> 
        </div>
      </article>
    );
  }
}

export default HomePage;
