import React from 'react'
import { connect } from 'react-redux'

import {TodoListState} from '../../store/actions'

import CheckList from '../CheckList/CheckList'

export type TodoItem = {
    id: string,
    text: string,
    checked: boolean,
    deleted: boolean,
}

const mapStateToProps = (state: TodoListState) => ({
    items: state.items,
})

type Props = ReturnType<typeof mapStateToProps>

const TodoContainer: React.FC<Props> = ({items}) => (
    <div style={{margin: '0 auto', width: '400px'}}>
        <CheckList items={items} showDeleteButton={false}/>
    </div>
)

export default connect(
    mapStateToProps
)(TodoContainer)