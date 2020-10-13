import React from 'react'
import { connect } from 'react-redux'

import {TodoListState} from '../../store/types'

import CheckList from '../CheckList/CheckList'

import styles from '../../styles/styles.module.css'

export type TodoItem = {
    id: string,
    text: string,
    checked: boolean,
    deleted: boolean
}

const mapStateToProps = (state: TodoListState) => ({
    items: state.items
})

type Props = ReturnType<typeof mapStateToProps>

const ListContainer: React.FC<Props> = ({items}) => (
    <div className={styles.center}>
        <CheckList items={items} showDeleteButton={false}/>
    </div>
)

export default connect(
    mapStateToProps
)(ListContainer)