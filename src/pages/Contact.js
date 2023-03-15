
import Contact_Form from "../Components/Form";
import { useState, useEffect } from "react";

const Contact = () => {
    console.log("contact");

    let [data, setData] = useState({});
    let getData = (formData) =>{
        setData(formData);
    }
    useEffect(()=>{
        console.log("Things change");
    })
    
    return ( 
        <div>
            
            <h1>YOU ARE IN CONTACT PAGE</h1>
            <Contact_Form callback={getData}/>
            {data.firstnameInfo}<br></br>
            {data.lastnameInfo}
            
        </div>
     );
}
 
export default Contact;