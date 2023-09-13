import "./header.css"
import { Link } from "react-router-dom"
import RegistrPanel from "./registrPanel/registrPanel"


const Header = () => {
    return (<div className="header">
        <Link to={"/"}>
            <div className="header-logo header-div">Logo</div>
        </Link>
        
        <div className="header-nav-panel header-div">nav panel</div>
        <div className="header-search header-div">search</div>
        <RegistrPanel/>
    </div>)
}
export default Header
