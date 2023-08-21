const Login = () => {
  return (
  
  
  
      
 
                            
                           <div class="login-box">    
                          <form onsubmit="login.php" class="container" method="post">
                              <h1><b>login</b></h1>   
                      <label for="name">enter your name</label>
                          <input type="text" name="name" placeholder="enter name" required/>
                          <label for="pass"> enter your password</label>
                          <input type="password" name="pass" placeholder="enter password" required/>
                         <div id="chk"> <label for="checked"><input  type= "checkbox" name="checked"/>remember me </label></div>
                                                     
                              <button class="btn" id="id1" type="submit">login</button>
                              <button class="btn" id="id2" type="submit">cancel</button>
       
       
       <p>Not a member yet  <a href="Register.js">signup now?</a></p>                   
                      
                  </form>
          
                  </div>
           
  
    )
};

export default Login;