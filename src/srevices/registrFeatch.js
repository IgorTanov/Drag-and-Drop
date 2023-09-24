

const registrUserFeatch = (email, login, password) => {

        fetch(`http://tnt.of.by/api//user/create/email/${email}/login/${login}/password/${password}`)
                .then(response => response.json())
                .then(response => console.log(response))

}

export default registrUserFeatch;