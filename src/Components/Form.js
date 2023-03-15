import { useState } from "react";

const Contact_Form = (details) => {
    const [firstname, setFirstname] = useState('Jeffrey');
    const [lastname, setLastname] = useState('Mediana');

    let submitForm = ()=> {
        details.callback({firstnameInfo: firstname, lastnameInfo: lastname});
    }
    return ( 
        <div >
            <label htmlFor="">FIRST NAME:</label>
            <input type="text" id="firstname" value={firstname} onChange = {(e) => setFirstname(e.target.value)}/>
            <label htmlFor="">LAST NAME:</label>
            <input type="text" id="lastname" value={lastname} onChange = {(e) => setLastname(e.target.value)}/><br/><br />
            <button type="button" onClick={submitForm}>SUBMIT FORM</button>
        </div>
     );
}
 
export default Contact_Form;