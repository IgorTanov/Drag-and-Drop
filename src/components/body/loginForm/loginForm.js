import { useState } from "react"
import loginUserFeatch from "../../../srevices/loginFeatch"

const LoginForm = () => {
    const [mail, setMail] = useState("")
    const [password, setPassword] = useState("")

    const sub = () => {
        loginUserFeatch(mail, password)
    }

    const getLogin = (e) => {
        setMail(e.target.value)
        console.log(mail)
    }

    const getPassword = (e) => {
        setPassword(e.target.value)

    }

    return (
        <form className="form" name="login-form" >
            <div className="registr-div">
                <span>Enter your login</span>
                <input type="mail" name="mail" onChange={getLogin} value={mail}></input>
                <span className="msg-error"></span>
                <br />
            </div>

            <div className="registr-div">
                <span>Enter your password</span>
                <input type="password" name="password" onChange={getPassword} value={password}></input>
                <span className="msg-error"></span>
                <br />
            </div>

            <input type="button" value="Log in" onClick={sub} ></input>
            {/* <input type="submit"></input> */}
        </form>
    )
}
export default LoginForm
