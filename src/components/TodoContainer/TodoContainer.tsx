import React from 'react'

import { addItem, TodoListState, toggleItem } from '../../store/actions'
import { connect } from 'react-redux'

import SearchableCheckList from '../SearchableCheckList/SearchableCheckList'
import AddItemForm from '../AddItemForm/AddItemForm'

export type TodoItem = {
    id: string,
    text: string,
    checked: boolean
}

const mapStateToProps = (state: TodoListState) => ({
    items: state.items,
})

const mapDispatchToProps = { addItem, toggleItem }

type Props = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps

const TodoContainer: React.FC<Props> = ({items, addItem, toggleItem}) => {
    return (
        <div style={{margin: '0 auto', width: '300px'}}>
            <SearchableCheckList items={ items } onToggle={toggleItem}/>
            <AddItemForm addAction={addItem}/>
        </div>
    )
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoContainer)