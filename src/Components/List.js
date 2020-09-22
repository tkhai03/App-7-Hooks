import React from 'react'

const List = (props) => {

    const result = props.listOfTodoItems.map((chore, index) => {
        return (
            <Todo todoItem={chore} key={index}/>
        )
    })

    return(
        <div>
            {results}
        </div>
    )
}

export default List