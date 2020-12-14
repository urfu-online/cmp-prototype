import React  from "react";

const CourseAnalyticsView = ({course}) => {
    return (
        <>
            <h4>Аналитика</h4>
           <p>
               У вашего курса доступана расширенная ситсетма учебной аналитики OpenEdX Insights
           </p>
            <button className="btn btn-primary"> Перейти в OpenEdX Insights</button>
        </>
    )
}
export default CourseAnalyticsView
