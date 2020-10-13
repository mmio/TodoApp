import React from 'react'
import { connect } from 'react-redux'

import { addItem, toggleItem, deleteItem } from '../../store/actions'
import { TodoListState } from '../../store/types'

import SearchableCheckList from '../SearchableCheckList/SearchableCheckList'
import AddItemForm from '../AddItemForm/AddItemForm'

import styles from '../../styles/styles.module.css'

const mapStateToProps = (state: TodoListState) => ({
    items: state.items
})

const mapDispatchToProps = {
    addItem,
    toggleItem,
    deleteItem
}

type Props = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps

const TodoContainer: React.FC<Props> = ({items, addItem, toggleItem, deleteItem}) => (
    <div className={styles.center}>
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