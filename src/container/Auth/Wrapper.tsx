import React, { useState } from 'react';
import Register from './Register';



const Wrapper = () => {
    const [name, setname ] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState ("");
    const [confirmPassword, setConfirmPassword] = useState ("");
    const [gender, setgender] = useState ("");
    


    function validateForm(){
        return email.length > 0 && password.length > 0;
    }
    const handleSubmit = () => {
        console.log(email, password);
        if(name.length<3){
            alert ("invalid Name");
        }
        
        if(!validateEmail(email)) {
            alert ("invalid email");
            return;
        }
        // if(!validatepassword(password)){
        //     alert ("invalid Password")
        // }
       
    };
    

    const validateEmail = (email: string) => {
        return email.match(
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ 
        );
    };
  return (
    <>
     

       <Register
        name={name} 
        setname={(value: string) => setname(value)}
        email={email}
        setEmail={(value: string) => setEmail(value)}
        password={password} 
        confirmPassword={confirmPassword}
        setPassword={(value: string) => setPassword(value)}
        setconfirmPassword={(value: string) => setConfirmPassword(value)}
        gender={gender}
        setgender={(value: string) => setgender(value)}
        onClick={handleSubmit}
    />
    </>
  );
};

export default Wrapper;
