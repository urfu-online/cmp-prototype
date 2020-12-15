import React  from "react";

const CourseEnrollmentsView = ({course}) => {
    return (
        <>
            <h4>Управление слушателями</h4>
            <h5>Зачисление слушателей</h5>
            <div className="form-group">
                <label> Введите электронную почту или имя пользователя.</label>
                <textarea className="form-control" placeholder="Электронная почта/имя пользователя" rows="3"></textarea>
                <small className="form-text text-muted"></small>
            </div>
            <button type="submit" className="btn btn-primary">Зачислить</button>

            <h5 className="mt-2">Отчисление <слушателей></слушателей></h5>
            <div className="form-group">
                <label> Введите электронную почту или имя пользователя.</label>
                <textarea className="form-control" placeholder="Электронная почта/имя пользователя" rows="3"></textarea>
                <small className="form-text text-muted"></small>
            </div>
            <button type="submit" className="btn btn-primary">Отчислить</button>

            <h5 className="mt-2">Управление группами</h5>
            <div className="input-group">
                <select className="custom-select" id="inputGroupSelect02">
                    <option selected>Выбирите группу из списка</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
                <div className="input-group-append">
                    <label className="input-group-text bg-primary" htmlFor="inputGroupSelect02">+ Создать новую группу</label>
                </div>
            </div>
            <div className="form-group">
                <label> Введите электронную почту или имя пользователя.</label>
                <textarea className="form-control" placeholder="Электронная почта/имя пользователя" rows="3"></textarea>
                <small className="form-text text-muted"></small>
            </div>
            <button type="submit" className="btn btn-primary">Добавтить слушателей в группу</button>



        </>
    )
}
export default CourseEnrollmentsView
