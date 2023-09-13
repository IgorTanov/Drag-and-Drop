import { Route, Routes, Link } from "react-router-dom"
import StartPage from "./startPage/startPage"
import Projects from "./projects/projects"
import Teamplates from "./teamplates/teamplates"
import Workspaces from "./workspaces/workspaces"
import RegistrForm from "./registr/registrForm"
import LoginForm from "./loginForm/loginForm"
import "./body.css"

const Body = () => {
    return (<div className="body">
        <div className="body-nav-panel">
            <Link to={"/projects"}>
            <div className="body-projects">Projects</div>
            </Link> 
            <Link to={"/templates"}>
            <div className="body-templates">Templates</div>
            </Link>
            <Link to={"/workspaces"}>
            <div className="body-workspaces">Workspaces</div>
            </Link>
        </div>
        <div className="body-content">
            <>
                <Routes>
                    <Route path="/" element={<StartPage/>}/>
                    <Route path="/projects" element={<Projects/>}/>
                    <Route path="/templates" element={<Teamplates/>}/>
                    <Route path="/workspaces" element={<Workspaces/>}/>
                    <Route path="/registration" element={<RegistrForm/>}/>
                    <Route path="/login" element={<LoginForm/>}/>
                </Routes>
            </>

            
        
        </div>
        
        
    </div>)
}
export default Body
