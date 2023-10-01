import { Route, Routes, Link } from "react-router-dom"
import StartPage from "./startPage/startPage"
import Board from "./board/board"
import RegistrForm from "./registr/registrForm"
import LoginForm from "./loginForm/loginForm"
import "./body.css"
import { useState } from "react"
import SvgArrowDown from "../../svg/svgArrowDown"
import NewBoard from "./newBoard/newBoard"

const Body = () => {
    const [showProject, setShowProject] = useState(false)
    const projectWindow = () => {
        if (showProject === true) {
            setShowProject(false)
        } else {
            setShowProject(true)
        }
    }
    return (<div className="body">
        <div className="body-nav-panel">
            <span>Projects</span>
            <div className="body-projects" onClick={projectWindow} >
                Test Projects <SvgArrowDown />
            </div>
            <div>
                {showProject ? <div>
                    <div>
                        <Link to={"/project-board"}> -test board</Link>
                    </div>
                    <div>
                        <Link to={"/create-new-board"}>-create new board</Link>
                        
                    </div>

                </div> : null}
            </div>
        </div>
        <div className="body-content">
            <>
                <Routes>
                    <Route path="/" element={<StartPage />} />
                    <Route path="/projects" element={<Board />} />
                    <Route path="/project-board" element={<Board />} />
                    <Route path="/create-new-board" element={<NewBoard />} />
                    {/* <Route path="/templates" element={<Teamplates/>}/>
                    <Route path="/workspaces" element={<Workspaces/>}/> */}
                    <Route path="/registration" element={<RegistrForm />} />
                    <Route path="/login" element={<LoginForm />} />
                </Routes>
            </>
        </div>
    </div>)
}

export default Body
