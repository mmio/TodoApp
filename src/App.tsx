import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

import TodoContainer from './components/Containers/TodoContainer'
import ListContainer from './components/Containers/ListContainer'
import Navigation from './components/Navigation/Navigation'

import './App.css'

const App = () => (
    <Router>
        <div>
            {/* <nav style={{paddingBottom: '1em'}}>
                <ul style={{listStyleType: 'none', margin: 0, padding: '1em', display: 'flex', backgroundColor: '#eee'}}>
                    <li style={{marginRight: '1em'}}>
                        <Link style={{textDecoration: 'none'}} to="/">Todo list</Link>
                    </li>
                    <li>
                        <Link style={{textDecoration: 'none'}} to="/tasks">Task history</Link>
                    </li>
                </ul>
            </nav> */}
            <Navigation />

            <Route path="/" exact component={TodoContainer} />
            <Route path="/tasks" component={ListContainer} />
        </div>
    </Router>
)

export default App
