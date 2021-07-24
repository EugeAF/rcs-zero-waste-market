import React, {useState} from "react";

function Contact() {

    const [prueba, setPrueba] = useState(JSON.parse(localStorage.getItem('contactos')) || []);
    localStorage.setItem('account', JSON.stringify(prueba)); 

    /*Listado de Usuarios*/
    const [newAccount, setNewAccount] = useState({
        email: '',
        password: '',
    });
    
    /*Setea */
    const setAccount = (event) =>{
        setNewAccount({...newAccount, [event.target.name]: event.target.value});
    };

    const accounts = () => {
        if(newAccount.email != "" && newAccount.password != ""){
            setPrueba([...prueba, newAccount]);
            localStorage.setItem('contactos', JSON.stringify(prueba));
            setNewAccount({
                email: '',
                password: '',
            });
        }else{
            alert("Complete los campos")
        }
    };

    return(
        <form className="d-flex flex-column align-items-center form-contact justify-content-center mt-5">
            <label htmlFor="" >Email</label>
            <input type="text" name="email" className="w-25" value={newAccount.email} onChange={setAccount}/>

            <label htmlFor="">Password</label>
            <input type="password" name="password" className="w-25" value={newAccount.password} onChange={setAccount}/>

            <a className="btn btn-primary w-25 mt-3 mb-5" onClick={accounts}>Add</a>                
        </form>
    )
}

export default Contact;