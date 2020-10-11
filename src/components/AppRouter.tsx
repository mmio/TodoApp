import React from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

import TodoContainer from './TodoContainer/TodoContainer'
import ListContainer from './TodoContainer/ListContainer'
 
const AppRouter = () => (
    <Router>
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Todo list</Link>
                    </li>
                    <li>
                        <Link to="/tasks">Task history</Link>
                    </li>
                </ul>
            </nav>

            <Route path="/" exact component={TodoContainer} />
            <Route path="/tasks" component={ListContainer} />
        </div>
    </Router>
)

export default AppRouter