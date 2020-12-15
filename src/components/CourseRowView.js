import React, {useState} from "react";
import CourseSettingsView from "./CourseSettingsView";
import CourseAnalyticsView from "./CourseAnalyticsView";
import CourseEnrollmentsView from "./CourseEnrollmentsView";
import CourseReportsView from "./CourseReportsView";
import CourseExportView from "./CourseExportView";
import CourseImportView from "./CourseImportView";
import {tabsName} from "../settings/tabs"

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
                    {course.session.map(
                        (session,index) => <p key={index}>{session.name}</p>
                    )}

            </td>
            <td>
                <button className="btn btn-primary" onClick={() =>onSettingsView(!isSettingsView)}>Настройки</button>
            </td>
        </tr>
            {
                isSettingsView &&
                <tr>
                    <td colSpan="5">
                        <nav className="nav nav-pills nav-justified">
                        {course.actions.map(
                            (action, index) =>
                                <a
                                    key={index}
                                    className={tabName === action? 'nav-link active': 'nav-link bg-secondary' }
                                    onClick={() => onTabName(action)}
                                    style={{cursor: 'pointer'}}
                                >
                                    {tabsName[action]}
                                </a>
                        )}
                        </nav>
                        <div className="p-4" style={{border: '2px solid #4e5d6c'}}>
                            { tabName === 'settings' && <CourseSettingsView course={course}/> }
                            { tabName === 'analytics' && <CourseAnalyticsView course={course}/> }
                            { tabName === 'enrollments' && <CourseEnrollmentsView course={course}/> }
                            { tabName === 'reports' && <CourseReportsView course={course}/> }
                            { tabName === 'export' && <CourseExportView course={course}/> }
                            { tabName === 'import' && <CourseImportView course={course}/> }

                        </div>
                    </td>
                </tr>
            }

    </>
    )
}
export default CourseRowView
