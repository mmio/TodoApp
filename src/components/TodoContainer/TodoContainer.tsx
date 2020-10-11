import React from 'react'
import { connect } from 'react-redux'

import { addItem, TodoListState, toggleItem, deleteItem } from '../../store/actions'

import SearchableCheckList from '../SearchableCheckList/SearchableCheckList'
import AddItemForm from '../AddItemForm/AddItemForm'

export type TodoItem = {
    id: string,
    text: string,
    checked: boolean,
    deleted: boolean,
}

const mapStateToProps = (state: TodoListState) => ({
    items: state.items,
})

const mapDispatchToProps = {
    addItem,
    toggleItem,
    deleteItem
}

type Props = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps

const TodoContainer: React.FC<Props> = ({items, addItem, toggleItem, deleteItem}) => (
    <div style={{margin: '0 auto', width: '400px'}}>
        <SearchableCheckList
            items={items}
            onToggle={toggleItem}
            onDelete={deleteItem}
        />
        <AddItemForm addAction={addItem}/>
    </div>
)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoContainer)