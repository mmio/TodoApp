import React, { useEffect, useState } from 'react'

import { TodoItem } from '../../store/types'

import RadioButton from '../RadioButton/RadioButton'
import KeyboardInput from '../KeyboardInput/KeyboardInput'

import styles from '../../styles/styles.module.css'

type Props = {
    items: TodoItem[]
    onFilter: (arg0: TodoItem[]) => void
}

type FilterFunction<T> = (arg0: T) => boolean

const ItemFilter: React.FC<Props> = ({ items, onFilter }) => {
    const [searchTerm, setSearchTerm] = useState('')
    const [showHidden, setShowHidden] = useState(false)
    const [showCompleted, setShowCompleted] = useState(false)

    const unsetRadioButtons = () => {
        setShowCompleted(false)
        setShowHidden(false)
    }

    const filterMatchingItems = (item: TodoItem) =>
        item.text.toLowerCase().includes(searchTerm.toLowerCase())

    const filterCheckedItems = (item: TodoItem) =>
        item.checked === true

    const filterUncheckedItems = (item: TodoItem) =>
        item.checked === false

    const filterDeleted = (item: TodoItem) =>
        item.deleted !== true

    const filterOnCondition = <T, >(condition: boolean, filter: FilterFunction<T>) =>
        (item: T) =>
            (condition)
            ? filter(item)
            : true

    const filters: FilterFunction<TodoItem>[] = [
        filterMatchingItems,
        filterDeleted,
        filterOnCondition(showHidden, filterUncheckedItems),
        filterOnCondition(showCompleted, filterCheckedItems)
    ]

    useEffect(() => {
        const filteredItems = filters.reduce(
            (acc: TodoItem[], filter: FilterFunction<TodoItem>) =>
                acc.filter(filter)
            , items)

        onFilter(filteredItems)
    }, [items, showHidden, searchTerm, showCompleted])

    return (
        <div className={styles.roundBorder}>
            <KeyboardInput
                initValue={searchTerm}
                placeholder={'Search...'}
                onInputChange={setSearchTerm}
            />
            <div className={styles.horizontalContainer}>
                <RadioButton
                    group={'a'}
                    onToggle={unsetRadioButtons}
                    label={'All'}
                    checkedByDefault
                />
                <RadioButton
                    group={'a'}
                    onToggle={() => {
                        unsetRadioButtons()
                        setShowHidden(true)
                    }}
                    checked={showHidden}
                    label={'Hide completed'}
                />
                <RadioButton
                    group={'a'}
                    onToggle={() => {
                        unsetRadioButtons()
                        setShowCompleted(true)
                    }}
                    checked={showCompleted}
                    label={'Show completed only'}
                />
            </div>
        </div>
    )
}

export default ItemFilter
