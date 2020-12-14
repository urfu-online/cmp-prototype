import React, { useContext } from 'react'
import { DataContext } from '../App'
import { withRouter } from 'react-router-dom'

const LoginPage = (props) => {
  console.log(props)
  const { userRole, changeUserRole } = useContext(DataContext)
  const login = () => {
    changeUserRole('user')
    props.location.pathname = '/'
  }

  return (
        <div className="row">
            <div className="col-lg-12 col-md-12">
                <h1>Войти</h1>
                <p>Если у вас ещё нет учётной записи, пожалуйста, сначала <a
                    href="/signup">зарегистрируйтесь</a>.
                </p>
                    <div id="div_id_login" className="form-group">
                        <label htmlFor="id_login" className=" requiredField"> Имя пользователя<span className="asteriskField">*</span> </label>
                            <div className="">
                                <input
                                    type="text"
                                    name="login"
                                    placeholder="Имя пользователя"
                                    autoFocus="autofocus"
                                    maxLength="150"
                                    className="textinput inputtext form-control"
                                    required=""
                                    id="id_login"/>
                            </div>
                        </div>
                        <div id="div_id_password" className="form-group"><label htmlFor="id_password"
                                                                                className=" requiredField">
                            Пароль<span className="asteriskField">*</span> </label>
                            <div className=""><input type="password" name="password" placeholder="Пароль"
                                                     className="textinput textInput form-control" required=""
                                                     id="id_password"/></div>
                        </div>
                        <div className="form-group">
                            <div id="div_id_remember" className="form-check"><input type="checkbox" name="remember"
                                                                                    className="checkboxinput form-check-input"
                                                                                    id="id_remember"/> <label
                                htmlFor="id_remember"
                                className="form-check-label">
                                Запомнить меня
                            </label></div>
                        </div>

                        <button className="primaryAction btn btn-primary mr-3" type="submit" onClick={login}>Войти</button>
                        <a className="button secondaryAction" href="/accounts/password/reset/">Забыли пароль?</a>
            </div>
        </div>
  )
}

export default withRouter(LoginPage)
