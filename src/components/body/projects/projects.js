import { useState } from "react"
import "./projects.css"

const Projects = () => {
    const [board, setBoard] = useState([
        { id: 1, order: 1, items: [{ id: 1, tittle: "task1 description" }, { id: 2, tittle: "task2 description" }] },
        { id: 2, order: 2, items: [{ id: 3, tittle: "task3 description" }, { id: 4, tittle: "task4 description" }] },
        { id: 3, order: 3, items: [{ id: 5, tittle: "task5 description" }, { id: 6, tittle: "task6 description" }] }
    ])
    const [startCard, setStatrtCard] = useState(null)
    const [dropCardOrder, setDropCardOrder] = useState(null)

    const dragStartHandler = (e, card) => {
        console.log("start", card)

        setStatrtCard(card)
    }
    const dragLeaveHandler = (e) => {
        e.target.style = "background:white"
        console.log("leave", e.target)
    }
    const dragOverHandler = (e) => {
        e.preventDefault()
        e.target.style = "background:lightgrey"
        // console.log("over", e.target)
    }
    const dragEndHandler = (e) => {
        console.log("end", e.target)
        e.target.style = "background:white"
    }

    const dropHandler = (e, card) => {
        e.target.style = "background:white"
        e.preventDefault()
        console.log("drop", card)
        setDropCardOrder(card.order)
        setBoard(board.map(elem => {
            if (elem.id === card.id) {
                return { ...elem, order: startCard.order }
            } if (elem.id === startCard.id) {
                return { ...elem, order: card.order }
            }
            return elem
        }))
        console.log(startCard, dropCardOrder)
    }

    return (<div className="projects">
        {board.sort(function sorting(a, b) {
            if (a.order > b.order) {
                return 1
            } else {
                return -1
            }

        }).map(card =>
            <div
                key={card.id}
                className="table"
                draggable={true}
                onDragStart={(e) => dragStartHandler(e, card)}
                onDragLeave={(e) => dragLeaveHandler(e)}
                onDragEnd={(e) => dragEndHandler(e)}
                onDragOver={(e) => dragOverHandler(e)}
                onDrop={(e) => dropHandler(e, card)}
            >
                <div className="card-content">
                    {"order " + card.order}<br/>
                    {card.items[0].tittle}
                    
                </div><br />

                {/* {card.items.map(item =>
                    <div className="task" key={item.id} draggable={true}>
                        {item.id + ")" + item.tittle}
                    </div>
                )} */}



            </div>
        )}
    </div>)
}
export default Projects
