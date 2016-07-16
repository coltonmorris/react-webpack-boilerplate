import React from 'react'
import ReactDOM from 'react-dom'
 
export default class Hello extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: props.name};
  }
  render() {
    return (
      <div>
        <h1>Hello {this.state.name}</h1>
      </div>
    )
  }
}
