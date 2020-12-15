import React  from "react";

const CourseAnalyticsView = ({course}) => {
    return (
        <>
            <h4>Аналитика</h4>
            <h5>Информация о записи на курс</h5>


            <p>Количество зарегистрированныхпо форме обучения</p>
            <p>Подтверждённые:	<strong>2660</strong></p>
            <p>Бесплатный курс:	<strong>0</strong></p>
            <p>Сертификат Кодекса чести:	<strong>19858</strong></p>
            <p>Профессиональный:	<strong>0</strong></p>
            <p>Итого:	<strong>22518</strong></p>

            <h5>OpenEdX Insights</h5>
            <p>
               У вашего курса доступана расширенная ситсетма учебной аналитики OpenEdX Insights
           </p>
            <button className="btn btn-primary"> Перейти в OpenEdX Insights</button>
        </>
    )
}
export default CourseAnalyticsView
