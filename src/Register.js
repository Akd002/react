const Register = () => {
    return (
    <>
    <div class="register-box">
      <form onsubmit="register.php" class="form-box">
    <p>create account</p>
    <label for="name">enter your name</label>
    <input type="text" name="name" placeholder="your name"/>
    <label for="email">enter your mail-id</label>
    <input type='text' name="email" placeholder="your email"/>
    <label for="password">enter password</label>
    <input type="text" name="pass" placeholder="password"/>
    <label for="pass">re-enter password</label>
    <input type="text" name="pass" placeholder="repeat password"/>
    
    
    
  <label for="box"><input type='checkbox' name="box"/> i agree to all terms</label>
    
    <input type="submit"/>
    </form>
    </div>
    </>
      )
  };
  
  export default Register;