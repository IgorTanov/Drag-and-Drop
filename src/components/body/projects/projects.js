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
            >
                <div className="card-content">
                    {"order " + card.order}<br />
                    

                </div><br />

                {card.items.map(item =>
                    <div className="task" key={item.id} draggable={true}>
                        {item.id + ")" + item.tittle}
                    </div>
                )}



            </div>
        )}
    </div>)
}
export default Projects
