import React,{useState} from 'react';
import classes from './LoginAdmin.module.css'

const LoginAdmin = () => {
    const [enteredEmail, setEnteredEmail] = useState('');
    const [emailIsValid, setEmailIsValid] = useState();
    const [enteredPassword, setEnteredPassword] = useState('');
     const [passwordIsValid, setPasswordIsValid] = useState();     
     const [formIsValid, setFormIsValid] = useState(false);
     const [isLoggedIn, setIsLoggedIn] = useState(false);
     const emailChangeHandler = (event) => {
        setEnteredEmail(event.target.value);
    
        setFormIsValid(
          event.target.value.includes("@") &&
            event.target.value.trim().length > 0 && enteredPassword.trim().length>8); };
    
      const passwordChangeHandler = (event) => {
        setEnteredPassword(event.target.value);
    
        setFormIsValid(
          enteredEmail.trim().length > 8 && 
          setEnteredEmail.includes("@") &&
          event.target.value.trim().length > 6
        );
      };
    
      const validateEmailHandler = () => {
      setEmailIsValid(enteredEmail.trim().length > 8 && 
      enteredEmail.includes("@"));
      };
    
      const validatePasswordHandler = () => {
        setPasswordIsValid(enteredPassword.trim().length > 6);
      };
    
      const submitHandler = (event) => {
        event.preventDefault();
        setIsLoggedIn(true);
      };   
   return(
/*<Form>
    <table>
  <Form.Group className="mb-3" controlId="formBasicEmail">
  <div className="form-row">
  <div
              className="col-md-4 mb-3"
              className={`${classes.control} ${
                emailIsValid === false ? classes.invalid : ""
              }`}
            >
                   <div className="input">
    <input type="email" 
                id="validationCustom01"
                onChange={emailChangeHandler}
                onBlur={validateEmailHandler} />
                </div>
    </div>
    <label>البريد الإلكتروني</label>
 
    </div>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
  <div className="form-row">
  <div
              className="col-md-4 mb-3"
              className={`${classes.control} ${
                passwordIsValid === false ? classes.invalid : ""
              }`}
            >
                 <div className="label">
    <label>كلــمة العبـور</label>
   
    </div>
   
    <div className="input">
    <input  type="password"  
                id="validationCustom01"
                onChange={passwordChangeHandler}
                onBlur={validatePasswordHandler} />
                </div>
    </div>
    </div>
  </Form.Group>
 
  <button class="ui button" type="submit">دخــول</button>
  </table>
</Form> */
<div class="ui placeholder segment">
  <div class="ui two column very relaxed stackable grid">
    <div class="column">
      <div class="ui form">
        <div class="field">
          <label>البريد الإلكتروني</label>
          
          <div class="ui left icon input">
            <input type="text" />
            <i class="user icon"></i>
          </div>
        </div>
        <div class="field">
          <label>كلمة العبور</label>
          <div class="ui left icon input">
            <input type="password"/>
            <i class="lock icon"></i>
          </div>
        </div>
        <button class="ui button" type="submit">دخــول</button>
      </div>
    </div>
    <div class="middle aligned column">
      <div class="ui big button">
        <i class="signup icon"></i>
        أنشِئ حسابًا
      </div>
    </div>
  </div>
  <div class="ui vertical divider">
     
     </div>
</div>


);
};

export default LoginAdmin;