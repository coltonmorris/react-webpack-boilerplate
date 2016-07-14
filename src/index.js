import React from 'react'
import ReactDOM from 'react-dom'

import './styles/style.css'
import Hello from './components/hello.jsx'

class App extends React.Component {
  render() {
    return (
      <div>
        <Hello name='Colton'/>
      </div>
    )
  }
}
ReactDOM.render(<App/>, document.getElementById('App'))
