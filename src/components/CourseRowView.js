import React, {useState} from "react";
import CourseSettingsView from "./CourseSettingsView";

const CourseRowView = ({course}) => {
    let [isSettingsView, onSettingsView] = useState(false)
    let [tabName, onTabName] = useState("settings")

    return (
        <>
        <tr className="table-secondary">
            <th scope="row"></th>
            <td>{course.name}</td>
            <td>{course.rightНolder}</td>
            <td>
                <select className="form-control">
                    {course.session.map(
                        (session,index) => <option key={index}>{session.name}</option>
                    )}
                </select>
            </td>
            <td>
                <button className="btn btn-primary" onClick={() =>onSettingsView(!isSettingsView)}>Настройки</button>
            </td>
        </tr>
            {
                isSettingsView &&
                <tr>
                    <td colSpan="5">

                        {course.actions.map(
                            (action, index) =>
                                <button
                                    key={index}
                                    className={tabName === action? 'btn btn-primary': 'btn btn-secondary' }
                                    onClick={() => onTabName(action)}
                                >
                                    {action}
                                </button>
                        )}
                        { tabName === 'settings' && <CourseSettingsView course={course}/> }
                    </td>
                </tr>
            }

    </>
    )
}
export default CourseRowView
