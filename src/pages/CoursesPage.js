import React, {useState} from 'react'
import CourseRowView from "../components/CourseRowView";

const coursesData = [
    {
        name: 'Инженерная механика',
        rightНolder: 'Урфу',
        session: [
            {
                name: 'сессия 1',
                url: 'dsdfsdf'
            }
        ],
        actions: [
            'settings',
            'reports',
            'analytics',
            'enrollments',
            'export',
            'import'
        ]
    },
    {
        name: 'Инженерная механика',
        rightНolder: 'Урфу',
        session: [
            {
                name: 'сессия 1',
                url: 'dsdfsdf'
            }
        ],
        actions: [
            'settings',
            'reports',
            'analytics',
            'enrollments',
            'export',
            'import'
        ]
    },
    {
        name: 'Инженерная механика',
        rightНolder: 'Урфу',
        session: [
            {
                name: 'сессия 1',
                url: 'dsdfsdf'
            }
        ],
        actions: [
            'settings',
            'reports',
            'analytics',
            'enrollments',
            'export',
            'import'
        ]
    },
    {
        name: 'Инженерная механика',
        rightНolder: 'Урфу',
        session: [
            {
                name: 'сессия 1',
                url: 'dsdfsdf'
            }
        ],
        actions: [
            'settings',
            'reports',
            'analytics',
            'enrollments',
            'export',
            'import'
        ]
    },
    {
        name: 'Инженерная механика',
        rightНolder: 'Урфу',
        session: [
            {
                name: 'сессия 1',
                url: 'dsdfsdf'
            }
        ],
        actions: [
            'settings',
            'reports',
            'analytics',
            'enrollments',
            'export',
            'import'
        ]
    },
    {
        name: 'Инженерная механика',
        rightНolder: 'Урфу',
        session: [
            {
                name: 'сессия 1',
                url: 'dsdfsdf'
            }
        ],
        actions: [
            'settings',
            'reports',
            'analytics',
            'enrollments',
            'export',
            'import'
        ]
    },
    {
        name: 'Инженерная механика',
        rightНolder: 'Урфу',
        session: [
            {
                name: 'сессия 1',
                url: 'dsdfsdf'
            }
        ],
        actions: [
            'settings',
            'reports',
            'analytics',
            'enrollments',
            'export',
            'import'
        ]
    },

]



const CoursesPage = () => {


    const courses = coursesData.map(
       (course, index) => {
           return <CourseRowView  key={index} course={course}/>
       })


  return (
        <>
        <h2>Мои курсы</h2>
            <table className="table">
                <thead>
                <tr className="table-primary">
                    <th scope="col"></th>
                    <th scope="col">Название курса</th>
                    <th scope="col">Правообладатель</th>
                    <th scope="col">Список сессий</th>
                    <th scope="col">Действия</th>
                </tr>
                </thead>
                <tbody>
                {
                    courses
                }
                </tbody>
            </table>
        </>
  )
}

export default CoursesPage
