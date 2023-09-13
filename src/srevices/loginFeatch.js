const loginUserFeatch = (login,password) => {
    
    fetch(`http://tnt.of.by/api//user/login/login/${login}/password/${password}`)
    .then(response=>response.json())
    .then(response=>console.log(response))
}

export default loginUserFeatch;
