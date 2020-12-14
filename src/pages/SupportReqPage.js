import React from "react";
import {NavLink} from "react-router-dom";

const DevReqPage = () => {
    return (
        <>
            <div className="article">
                <h2>Заявки на размещение и сопровождение курса</h2>
            </div>
            <div className="mb-5">
            <div className="form-group">
                <label>Название курса</label>
                <input type="email" className="form-control"/>
                <small  className="form-text text-muted"></small>
            </div>
            <div className="form-group">
                <label>Наименование организации/Университет/Институт</label>
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
                <label>Выбирите варианты взаимодействия</label>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" name="inlineRadioOptions" id="inlineRadio1"
                           value="option1"/>
                        <label className="form-check-label" htmlFor="inlineRadio1">Размещение онлайн-курса</label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" name="inlineRadioOptions" id="inlineRadio2"
                           value="option2"/>
                        <label className="form-check-label" htmlFor="inlineRadio2">Сопровождение онлайн-курса</label>
                </div>
                <small className="form-text text-muted"></small>
            </div>
            <div className="form-group">
                <label>Авторский коллектив</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                <small className="form-text text-muted"></small>
            </div>
            <div className="form-group">
                <label>Краткое описание курса</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                <small className="form-text text-muted"></small>
            </div>
            <button type="submit" className="btn btn-primary">Отправить заявку</button>
            </div>
        </>
    )
}
export default DevReqPage