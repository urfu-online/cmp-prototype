import React from "react";
import {NavLink} from "react-router-dom";

const DevReqPage = () => {
    return (
        <>
            <div className="article">
                <h2>Заявка на разработку курса</h2>
                <p>В условиях оперативного перехода на дистанционное обучение УрФУ предлагает вам актуальный и не
                    требующий специальных навыков инструмент для создания онлайн-курсов – <a
                        title="Открытый университет УрФУ" href="https://courses.openedu.urfu.ru"
                        target="_blank">courses.openedu.urfu.ru</a>. Данная платформа проста в использовании, способна
                    поддерживать все современные инструменты онлайн-обучения и позволит максимально качественно обучать
                    неограниченное число слушателей любых учебных учреждений.</p>
                <h3>Для создания вашего курса вам необходимо отправить заявку</h3>



                <p>После этого вам будет предоставлен доступ для работы на платформе, и вы сможете либо самостоятельно
                    перевести ваш курс в онлайн-формат, либо воспользоваться профессиональной помощью сотрудников Центра развития онлайн обучения.</p>
            </div>
            <div className="form-group">
                <label>Название курса</label>
                <input type="email" className="form-control"/>
                <small  className="form-text text-muted"></small>
            </div>
            <div className="form-group">
                <label>Институт</label>
                <input type="email" className="form-control"/>
                <small className="form-text text-muted"></small>
            </div>
            <div className="form-group">
                <label>Автор (руководитель авторского коллектива)</label>
                <input type="email" className="form-control"/>
                <small className="form-text text-muted"></small>
            </div>
            <div className="form-group">
                <label>Электронная почта</label>
                <input type="email" className="form-control"/>
                <small className="form-text text-muted"></small>
            </div>
            <div className="form-group">
                <label>Контактный телефон</label>
                <input type="email" className="form-control"/>
                <small className="form-text text-muted"></small>
            </div>
            <div className="form-group">
                <label>Кто будет выгружать на платформу материалы курса</label>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1"
                           value="option1"/>
                        <label className="form-check-label" htmlFor="inlineRadio1">Самостоятельно</label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2"
                           value="option2"/>
                        <label className="form-check-label" htmlFor="inlineRadio2">Технические специалисты Центра развития онлайн обучения</label>
                </div>
                <small className="form-text text-muted"></small>
            </div>
            <div className="form-group">
                <label>Авторский коллектив</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                <small className="form-text text-muted"></small>
            </div>
            <div className="form-group">
                <label>Краткое опиание курса</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                <small className="form-text text-muted"></small>
            </div>
            <button type="submit" className="btn btn-primary">Отправить заявку</button>
        </>
    )
}
export default DevReqPage