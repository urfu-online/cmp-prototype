import React  from "react";

const CourseSettingsView = ({course}) => {
    return (
        <>
            <h4>Настройки курса</h4>
            <div className="form-group">
                <label>Название курса</label>
                <input type="email" className="form-control" defaultValue={course.name}/>
                <small  className="form-text text-muted"></small>
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
            <button type="submit" className="btn btn-primary">Сохранить</button>
        </>
    )
}
export default CourseSettingsView
