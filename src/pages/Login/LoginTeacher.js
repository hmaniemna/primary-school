import React from 'react';
import './LoginTeacher.css';
const LoginTeacher = () => {
    return(
      <center>
        <form class="ui form">
  <div class="field">
    <label>إسم المستخدم</label>
    <div className="input">
    <div class="ui left icon input">
            <input  type="text" />
            <i class="user icon"></i>
          </div>
          </div>
  </div>
  <div class="field">
    <label>كلمة العبور</label>
    <div className="input">
    <div class="ui left icon input">
            <input type="password"/>
            <i class="lock icon"></i>
          </div>
          </div>
  </div>
  <div class="field">
    <div class="ui checkbox">
      <input type="checkbox" tabindex="0" />
      <label>أوافق على شروط الإستخدام</label>
    </div>
  </div>
  <button class="ui button" type="submit">دخــول</button>
</form>
</center>
    );
};

export default LoginTeacher;