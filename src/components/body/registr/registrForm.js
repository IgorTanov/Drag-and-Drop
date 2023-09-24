import "./registrForm.css"
import { useState } from "react"
import registrUserFeatch from "../../../srevices/registrFeatch";


const RegistrForm = () => {
    const [nameErrorMsg, setNameErrorMsg] = useState("");
    const [mail, setMail] = useState("")
    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")

    const sub = () => {
        registrUserFeatch(mail, login, password)
    }

    const getMail = (e) => {
        setMail(e.target.value)
    }

    const getLogin = (e) => {
        setLogin(e.target.value)
    }

    const getPassword = (e) => {
        setPassword(e.target.value)
    }

    const nameValidation = (e) => {
        console.log(e.target.value)
        setNameErrorMsg("")
        if (!/^[а-яА-ЯёЁa-zA-Z0-9( )!$%&'""*+-/=?^_`{|}~.,@<>:[\]]+$/i.test(e.target.value)) {
            setNameErrorMsg("field is not filled correctly")
        } if (e.target.value === "") {
            setNameErrorMsg("login must contain at least 1 character")
        }
    }
    return (<div className="registr-form">
        <form className="form" name="registration-form" >
            <div className="registr-div">
                <span>Enter your mail</span>
                <input type="mail" name="mail" onChange={(e) => getMail(e)}></input>
                <span className="msg-error"></span>
                <br />
            </div>
            <div className="registr-div">
                <span>Enter your Login</span>
                <input type="text" name="nickname" onChange={(e) => getLogin(e)} onBlur={(e) => nameValidation(e)}></input>
                <span className="msg-error">{nameErrorMsg}</span>
                <br />
            </div>
            <div className="registr-div">
                <span>Enter your password</span>
                <input type="password" name="password" onChange={(e) => getPassword(e)}></input>
                <span className="msg-error"></span>
                <br />
            </div>
            <div className="registr-div">
                <span>Confirm your password</span>
                <input type="password" name="confPassword"></input>
                <span className="msg-error"></span>
                <br />
            </div>
            <input type="button" value="submit" onClick={sub}></input>
            {/* <input type="submit"></input> */}
        </form>
    </div>)
}
export default RegistrForm