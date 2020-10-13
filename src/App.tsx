import React from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom'

import TodoContainer from './components/Containers/TodoContainer'
import ListContainer from './components/Containers/ListContainer'
import Navigation from './components/Navigation/Navigation'

import './App.css'

const App = () => (
    <Router>
        <div>
            <Navigation />

            <Route path='/' exact component={TodoContainer} />
            <Route path='/tasks' component={ListContainer} />
        </div>
    </Router>
)

export default App
