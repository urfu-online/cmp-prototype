import React, {useState} from 'react'

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
    let [isModalView, onModalView] = useState(false)

    const courses = coursesData.map(
       (course, index) => {
           return (
               <>
               <tr key={index}>
                   <th scope="row">{index+1}</th>
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
                       <button className="btn btn-primary">Настройки</button>
                   </td>
               </tr>
               <tr className="table-secondary">
                   <td colspan="5">

                           {course.actions.map(
                               (action, index) => <button key={index} className="btn btn-primary">{action}</button>
                           )}

                   </td>
               </tr>
                   </>
           )
       }
   )


  return (
        <>
        <h2>Мои курсы</h2>
            <table className="table">
                <thead>
                <tr>
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
