import React  from "react";

const CourseEnrollmentsView = ({course}) => {
    return (
        <>
            <h4>Управление слушателями</h4>
            <h5>Зачисление студентов</h5>
            <div className="form-group">
                <label> Введите электронную почту или имя пользователя.</label>
                <textarea className="form-control" placeholder="Электронная почта/имя пользователя" rows="3"></textarea>
                <small className="form-text text-muted"></small>
            </div>
            <button type="submit" className="btn btn-primary">Зачислить</button>
            <h5 className="mt-5">Отчисление студентов</h5>
            <div className="form-group">
                <label> Введите электронную почту или имя пользователя.</label>
                <textarea className="form-control" placeholder="Электронная почта/имя пользователя" rows="3"></textarea>
                <small className="form-text text-muted"></small>
            </div>
            <button type="submit" className="btn btn-primary">Отчислить</button>


        </>
    )
}
export default CourseEnrollmentsView
