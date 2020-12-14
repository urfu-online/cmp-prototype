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
                       {course.actions.map(
                           (action, index) => <button key={index} className="btn btn-primary">{action}</button>
                       )}
                   </td>
               </tr>
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
            <div className="modal fade show">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">Modal title</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            ...
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Understood</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
  )
}

export default CoursesPage
