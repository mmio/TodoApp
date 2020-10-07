import React from 'react'

type Item = {
    id: Number,
    text: String,
    checked: Boolean
}

type Props = {
    items: Array<Item>
}

const filterTerms = (items: Array<Item>, term: string): Array<Item> =>
    items.filter((item: Item) => item.text.includes(term))

const SearchableCheckList: React.FC<Props> = ({ items }) => {
    // filterTerms(items, 'hello')
    return (
        <>
            {/* <InputForm onInputChange={changeSearchPhrase} />
            <CheckList items={filterTerms(items, term)} /> */}
        </>
    )
}

export default SearchableCheckList
