import { useState } from "react"
import "./board.css"

const Board = () => {
    const [board, setBoard] = useState([
        { id: 1, order: 1, items: [{ id: 1, tittle: "task1 description" }, { id: 2, tittle: "task2 description" }] },
        { id: 2, order: 2, items: [{ id: 3, tittle: "task3 description" }, { id: 4, tittle: "task4 description" }] },
        { id: 3, order: 3, items: [{ id: 5, tittle: "task5 description" }, { id: 6, tittle: "task6 description" }] }
    ])
    const [startColumn, setStartColumn] = useState(null)
    const [startTask, setStartTask] = useState(null)
    const [dropCardOrder, setDropCardOrder] = useState(null)

    const taskDragStart = (e, task, column) => {
        setStartColumn(column)
        setStartTask(task)
        console.log(e.target)
        e.target.style = "background:lightskyblue"
    }

    const dragOverElement = (e) => {
        e.preventDefault()

    }

    const dragLeavElement = (e) => {
        // console.log(e.target)
    }

    const dragEndElement = (e) => {
        // console.log(e.target)
    }

    const dragDropElement = (e, taskBlock, columnDiv) => {
        e.preventDefault()
        console.log(taskBlock)
        const currentIndex = startColumn.items.indexOf(startTask)
        console.log(currentIndex)
        startColumn.items.splice(currentIndex, 1)
        const dropIndex = columnDiv.items.indexOf(taskBlock)

        columnDiv.items.splice(dropIndex + 1, 0, startTask)

        setBoard(board.map(elem => {
            if (elem.id === columnDiv.id) {
                return columnDiv
            } if (elem.id === startColumn.id) {
                return startColumn
            }
            return elem
        }))
    }

    const columnDragOver = (e) => {
        e.preventDefault()

    }

    const columnDrop = (e, column) => {
        e.preventDefault()
        column.items.push(startTask)
        const currentIndex = startColumn.items.indexOf(startTask)
        startColumn.items.splice(currentIndex, 1)
        setBoard(board.map(elem => {
            if (elem.id === column.id) {
                return column
            } if (elem.id === startColumn.id) {
                return startColumn
            }
            return elem
        }))
    }

    return (<div className="projects">
        {board.
            sort(function sorting(a, b) {
                if (a.order > b.order) {
                    return 1
                } else {
                    return -1
                }

            }).
            map(columnDiv =>
                <div
                    key={columnDiv.id}
                    className="table"
                    onDragOver={e => dragOverElement(e)}
                    onDrop={e => columnDrop(e, columnDiv)}
                >
                    <div className="card-content">
                        {"order " + columnDiv.order}<br />
                    </div><br />

                    {columnDiv.items.map(taskBlock =>
                        <div className="task" key={taskBlock.id} draggable={true}
                            onDragStart={e => taskDragStart(e, taskBlock, columnDiv)}
                            onDragOver={e => dragOverElement(e)}
                            onDragLeave={e => dragLeavElement(e)}
                            onDragEnd={e => dragEndElement(e)}
                        // onDrop={e => dragDropElement(e, taskBlock, columnDiv)}

                        >
                            {taskBlock.id + ")" + taskBlock.tittle}
                        </div>
                    )}
                </div>
            )
        }
    </div >)
}
export default Board
