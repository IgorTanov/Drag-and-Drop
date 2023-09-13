import { useState } from "react"
import "./projects.css"

const Projects = () => {
    const [state,setState] = useState([
        {id:1, order:1, text:"card1"},
        {id:2, order:2, text:"card2"},
        {id:3, order:3, text:"card3"}
    ])
    const dragStartHendler = (e, card) => {
       console.log("start", card, )
    }
    const dragLeaveHendler = (e) => {
        // console.log("leave", e.target) 
    }
    const dragOverHendler = (e) => {
        e.preventDefault()
        // console.log("over", e.target)
    }
    const dragEndHendler = (e) => {
        // console.log("end", e.target)
        
    }

    const dropHendler = (e,card) => {
        e.preventDefault()
        console.log("drop", card)
        
    }


    const table = state.map((card => 
        <div
             key={card.id}
             className="table"
             draggable={true}
             onDragStart={(e)=>dragStartHendler(e)}
             onDragOver={(e)=>dragOverHendler(e)}
             onDragLeave={(e)=>dragLeaveHendler(e)}
             onDragEnd={(e)=>dragEndHendler(e)}
             onDrop={(e)=>dropHendler(e)}>
                {card.text}
        </div>
    
    ))
    return(<div className="projects">
        {state.map(card=>
            <div 
            key={card.id}
             className="table"
             draggable={true}
             onDragStart={(e)=>dragStartHendler(e)}
             onDragOver={(e)=>dragOverHendler(e)}
             onDragLeave={(e)=>dragLeaveHendler(e)}
             onDragEnd={(e)=>dragEndHendler(e)}
             onDrop={(e)=>dropHendler(e)}>
                {card.text}

            </div>
            )}
    </div>)
}
export default Projects
