import React from 'react'
import ReactDOM from 'react-dom'

import './styles/style.css'
import Hello from './components/hello.jsx'
import Bootstrap from 'bootstrap/dist/css/bootstrap.css'
import { Button } from 'react-bootstrap'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Button bsStyle="primary">Dont click this.</Button>
        <Hello name='friend'/>
      </div>
    )
  }
}
ReactDOM.render(<App/>, document.getElementById('App'))
