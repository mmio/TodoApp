import React from 'react'
import SearchableCheckList from '../SearchableCheckList/SearchableCheckList'
import AddItemForm from '../AddItemForm/AddItemForm'

const TodoContainer = () => (
	<>
        <SearchableCheckList items={[]}/>
        <AddItemForm addAction={()=>{}}/>
    </>
)

export default TodoContainer
