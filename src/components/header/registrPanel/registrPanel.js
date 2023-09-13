import {Link} from "react-router-dom"

const RegistrPanel = () => {
    return(<div className="header-registr-panel">
        <Link to={"/registration"}>
        <input type="button" value="registration" /> 
        </Link>
        <Link to={"/login"}>
        <input type="button" value="login" /> 
        </Link>
        
    </div>)
}

export default RegistrPanel