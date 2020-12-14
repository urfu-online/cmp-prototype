import React, { useContext } from 'react'
import logo from '../static/logo.png'
import { NavLink } from 'react-router-dom'

import { DataContext } from '../App'

const Nav = () => {
  const { userRole, changeUserRole } = useContext(DataContext)
  const isView = userRole !== 'guest'
  return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-left">
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <NavLink className="navbar-brand" to="/"><img width="100%" className="d-md-block d-sm-none d-none"
                                                      src={logo}
                                                      alt="DET-TPS" /></NavLink>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <NavLink className="nav-link" exact to="/">Главная</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/about">О сервисе</NavLink>
                    </li>
                    <div className="dropdown-divider"></div>
                    {
                        isView &&
                            <>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button"
                               data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Заявки
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <NavLink className="dropdown-item" to="dev-req">Подачи заявки на разработку курса</NavLink>
                                <NavLink className="dropdown-item" to="support-req">Подачи заявки на размещение и сопровождение
                                    курса</NavLink>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" id="navbarDropdown2" role="button"
                               data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Шаблоны документов
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <NavLink className="dropdown-item" to="/price">Прайс</NavLink>
                                <NavLink className="dropdown-item" to="#"> Договор </NavLink>
                                <NavLink className="dropdown-item" to="#"> Соглашение </NavLink>
                                <NavLink className="dropdown-item" to="#"> Описание функций для партнера</NavLink>
                            </div>
                        </li>
                        </>
                        }

                    {
                        !isView &&
                          <>
                        <li className="nav-item">
                            <NavLink id="sign-up-link" className="nav-link" to="/signup">Регистрация</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink id="log-in-link" className="nav-link" to="/login">Войти</NavLink>
                        </li>
                        </>
                    }
                    {
                        isView &&
                        <li className="nav-item">
                            <NavLink id="log-in-link" className="nav-link" to="/" onClick={() => changeUserRole('guest')}>Выйти</NavLink>
                        </li>
                    }
                </ul>
            </div>
        </nav>
  )
}

export default Nav
