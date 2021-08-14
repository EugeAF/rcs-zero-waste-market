import React, {useState} from "react";
import emailjs from 'emailjs-com';

function Contact() {

    /*Listado de Usuarios*/
    const [newAccount, setNewAccount] = useState({
        name: '',
        email: '',
    });

    (function(){
        emailjs.init("user_c4fhNwUTWdvy2KRvMtgc6");
     })();
    
    /*Setea */
    const setAccount = (event) =>{
        setNewAccount({...newAccount, [event.target.name]: event.target.value});
    };

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.send('service_1wb82sv', 'template_vylzzko', {email: e.target.email.value, name: e.target.name.value});
    }

    return(
        <form className="d-flex flex-column align-items-center form-contact justify-content-center mt-5" onSubmit={sendEmail}>
            <label htmlFor="" >Name</label>
            <input type="text" name="name" className="w-25" value={newAccount.name} onChange={setAccount}/>

            <label htmlFor="">Email</label>
            <input type="email" name="email" className="w-25" value={newAccount.email} onChange={setAccount}/>

            <input type="submit" className="btn btn-primary w-25 mt-3 mb-5" value="Add"/>               
        </form>
    )
}

export default Contact;