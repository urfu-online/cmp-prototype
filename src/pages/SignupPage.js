import React from "react";

const SignupPage = () => {
    return (
        <div className="row pt-5">
            <div className="col-lg-12 col-md-12">

                <h1>Регистрация</h1>

                <p>Уже зарегистрированы? <a href="/login">Войдите</a>.</p>

                <form className="signup" id="signup_form" method="post" action="/accounts/signup/">


                        <div id="div_id_email" className="form-group">
                            <label htmlFor="id_email"
                                                                             className=" requiredField">
                            E-mail<span className="asteriskField">*</span> </label>
                            <div className="">
                                <input type="email" name="email" placeholder="E-mail адрес"
                                                     className="textinput inputtext form-control" required=""
                                                     id="id_email"/></div>
                        </div>
                        <div id="div_id_username" className="form-group"><label htmlFor="id_username"
                                                                                className=" requiredField">
                            Имя пользователя<span className="asteriskField">*</span> </label>
                            <div className=""><input type="text" name="username" placeholder="Имя пользователя"
                                                     autoFocus="autofocus" minLength="1" maxLength="150"
                                                     className="textinput inputtext form-control" required=""
                                                     id="id_username"/></div>
                        </div>
                        <div id="div_id_password1" className="form-group"><label htmlFor="id_password1"
                                                                                 className=" requiredField">
                            Пароль<span className="asteriskField">*</span> </label>
                            <div className=""><input type="password" name="password1" placeholder="Пароль"
                                                     className="textinput textInput form-control" required=""
                                                     id="id_password1"/></div>
                        </div>
                        <div id="div_id_password2" className="form-group"><label htmlFor="id_password2"
                                                                                 className=" requiredField">
                            Пароль (ещё раз)<span className="asteriskField">*</span> </label>
                            <div className=""><input type="password" name="password2" placeholder="Пароль (ещё раз)"
                                                     className="textinput textInput form-control" required=""
                                                     id="id_password2"/></div>
                        </div>


                        <button className="btn btn-primary" type="submit">Регистрация »</button>
                </form>


            </div>
        </div>

)
}

export default SignupPage