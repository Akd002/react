const Register = () => {
    return (
    <>
    <p>create account</p>
    <input type="text" name="name" placeholder="your name"/>
    <br/>
    <input type='text' name="email" placeholder="your email"/>
    <br/>
    <input type="text" name="pass" placeholder="password"/>
    <br/>
    <input type="text" name="pass" placeholder="repeat password"/>
    
    <br/>
    
  <input type='checkbox' name="box"/> i agree to all terms
  <br/>
  <input type="submit"/>
    </>
      )
  };
  
  export default Register;