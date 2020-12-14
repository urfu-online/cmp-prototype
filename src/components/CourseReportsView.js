import React  from "react";

const CourseReportsView = ({course}) => {
    return (
        <>
            <h4>Выгрузки</h4>
            <section id="data_download" className="idash-section active-section" aria-labelledby="header-data_download">
                <h5 className="hd hd-3" id="header-data_download">Скачивание данных</h5>


                <div className="data-download-container action-type-container">
                    <div className="request-response-error msg msg-error copy" id="data-request-response-error"
                        ></div>


                    <br/>
                        <p>Нажмите на кнопку ниже, чтобы показать настройки оценивания этого курса. Настройки оценивания
                            задаются оцениваемыми подразделами курса (например, вступительными испытаниями и
                            промежуточными заданиями) и можгут быть изменены на странице «Оценивание» (в меню
                            «Настройки») в Studio.</p>
                        <p><input type="button" name="dump-gradeconf" value="Настройки оценивания"
                                  data-endpoint="/courses/course-v1:urfu+ENGM+fall_2015/instructor/api/get_grading_config"/>
                        </p>

                        <div className="data-display-text" id="data-grade-config-text"></div>
                        <br />

                            <p>Нажмите, чтобы скачать список анонимных идентификаторов обучающихся в формате CSV:</p>
                            <p><input type="button" name="list-anon-ids"
                                      value="Получить список анонимных идентификаторов слушателей в CSV" data-csv="true"
                                      className="csv"
                                      data-endpoint="/courses/course-v1:urfu+ENGM+fall_2015/instructor/api/get_anon_ids"
                                      aria-disabled="true"/></p>
                </div>

                <div className="reports-download-container action-type-container">
                    <hr />
                        <h5 className="hd hd-3">Отчёты</h5>

                        <p>Для больших курсов создание некоторых отчётов может занять несколько часов. После завершения
                            процесса в таблице ниже появится ссылка с датой и временем создания. Отчёты создаются в
                            фоновом режиме, т. е. вы можете покинуть эту страницу во время создания отчёта.</p>

                        <p>Пожалуйста, наберитесь терпения и не нажимайте на кнопку несколько раз. Повторные нажатия
                            существенно замедлят процесс создания отчёта.</p>

                        <p>Нажмите для создания CSV-файла со списком обучающихся, включая адреса электронной почты и
                            имена пользователей:</p>

                        <p><input type="button" name="list-profiles-csv"
                                  value="Скачать список личных данных в формате CSV"
                                  data-endpoint="/courses/course-v1:urfu+ENGM+fall_2015/instructor/api/get_students_features"
                                  data-csv="true" /></p>

                        <p>Нажмите, чтобы создать файл в формате CSV со списком ещё не зарегистрировавшихся
                            пользователей, которым доступна регистрация на этот курс</p>

                        <p><input type="button" name="list-may-enroll-csv"
                                  value="Скачать список людей, которым доступна регистрация, в формате CSV"
                                  data-endpoint="/courses/course-v1:urfu+ENGM+fall_2015/instructor/api/get_students_who_may_enroll"
                                  data-csv="true" /></p>

                        <p>Щёлкните здесь, чтобы создать файл в формате CSV с результатами всех наблюдаемых испытаний
                            этого курса.</p>
                        <p><input type="button" name="proctored-exam-results-report"
                                  value="Создать отчёт о результатах наблюдаемого испытания"
                                  data-endpoint="/courses/course-v1:urfu+ENGM+fall_2015/instructor/api/get_proctored_exam_results" />
                        </p>


                        <p>Select a problem to generate a CSV file that lists all student answers to the problem. You
                            also select a section or chapter to include results of all problems in that section or
                            chapter.</p>

                        <p>
                            <strong>NOTE: </strong>
                            The generated report is limited to 5000 responses. If you expect more than 5000 responses,
                            try generating the report on a chapter-by-chapter, or problem-by-problem basis, or contact
                            your site administrator to increase the limit.
                        </p>

                        <p>
                        </p>

                        <p>
                            <input type="button" name="list-problem-responses-csv"
                                   value="Скачать файл CSV с ответами на задание"
                                   data-endpoint="/courses/course-v1:urfu+ENGM+fall_2015/instructor/api/get_problem_responses"
                                   data-csv="true"/>
                        </p>

                        <div className="issued_certificates">
                            <p>Нажмите, чтобы создать список сертификатов, выданных на этом курсе:</p>
                            <p>
                                <input type="button" name="issued-certificates-list"
                                       value="Посмотреть список выпущенных сертификатов" data-csv="false"
                                       data-endpoint="/courses/course-v1:urfu+ENGM+fall_2015/instructor/api/get_issued_certificates/"/>
                                    <input type="button" name="issued-certificates-csv"
                                           value="Загрузить CSV-файл со списком выпущенных сертификатов" data-csv="true"
                                           data-endpoint="/courses/course-v1:urfu+ENGM+fall_2015/instructor/api/get_issued_certificates/"/>
                            </p>
                            <div className="data-display-table certificate-data-display-table"
                                 id="data-issued-certificates-table"></div>
                            <div className="issued-certificates-error request-response-error msg msg-error copy"
                                ></div>
                        </div>

                        <div className="data-display-table profile-data-display-table"
                             id="data-student-profiles-table"></div>

                        <p>Нажмите, чтобы создать оценочный лист с информацией обо всех обучающихся в формате CSV.</p>
                        <p>
                            <input type="button" name="calculate-grades-csv" className="async-report-btn"
                                   value="Создать оценочный лист"
                                   data-endpoint="/courses/course-v1:urfu+ENGM+fall_2015/instructor/api/calculate_grades_csv"/>
                                <input type="button" name="problem-grade-report" className="async-report-btn"
                                       value="Создать оценочный лист с подробными оценками задач"
                                       data-endpoint="/courses/course-v1:urfu+ENGM+fall_2015/instructor/api/problem_grade_report"/>
                                    <input type="button" name="export-ora2-data" className="async-report-btn"
                                           value="Создать отчёт по заданиям с ответами в свободной форме"
                                           data-endpoint="/courses/course-v1:urfu+ENGM+fall_2015/instructor/api/export_ora2_data"/>
                        </p>

                        <div className="request-response msg msg-confirm copy" id="report-request-response"
                            ></div>
                        <div className="request-response-error msg msg-error copy" id="report-request-response-error"
                            ></div>
                        <br/>

                            <h5 className="hd hd-3">Оценочные листы, доступные для скачивания</h5>
                            <p>
                                Перечисленные ниже оценочные листы и списки доступны для скачивания. Ссылки на все
                                отчёты остаются на этой странице, отличить иx можно по дате и времени создания по UTC.
                                Отчёты не удаляются, так что вы всегда сможете получить доступ к ранее созданным отчётам
                                с этой страницы.
                            </p>


                            <p>
                                <strong>Примечание</strong>: чтобы сохранить конфиденциальность данных, прямые ссылки на
                                них невозможно сохранить или отправить по электронной почте. Копии ссылок действуют в
                                течение 5 минут.
                            </p><br/>

                            <div className="report-downloads-table" id="report-downloads-table"
                                 data-endpoint="/courses/course-v1:urfu+ENGM+fall_2015/instructor/api/list_report_downloads">
                                <div className="slickgrid slickgrid_858871 ui-widget"
                                    >
                                    <div tabIndex="0" hidefocus=""
                                        ></div>
                                    <div className="slick-header ui-state-default"
                                        >
                                        <div className="slick-header-columns"
                                             unselectable="on">
                                            <div className="ui-state-default slick-header-column"
                                                 id="slickgrid_858871link"
                                                 title="Ссылки создаются по требованию и остаются действительными в течение 5 минут в связи с деликатностью предоставленной слушателями информации."
                                                ><span className="slick-column-name">Название файла</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="slick-headerrow ui-state-default"
                                        >
                                        <div className="slick-headerrow-columns"></div>
                                        <div
                                           ></div>
                                    </div>
                                    <div className="slick-top-panel-scroller ui-state-default"
                                        >
                                        <div className="slick-top-panel"></div>
                                    </div>
                                    <div className="slick-viewport"
                                        >
                                        <div className="grid-canvas"
                                            >
                                            <div className="ui-widget-content slick-row even">
                                                <div className="slick-cell l0 r0 file-download-link"><a target="_blank"
                                                                                                       href="https://storage.yandexcloud.net/prod-edx-grades/grades/61af919740e1f29b3a573196a1a454c6ab0e83bb/urfu_ENGM_fall_2015_problem_grade_report_2019-11-07-0724.csv?Signature=5lDGW0rmeGotI7V8N3qF8q9yd4U%3D&amp;Expires=1923298916&amp;AWSAccessKeyId=ObB5TZ2KO3VX8dxKOGXA">urfu_ENGM_fall_2015_problem_grade_report_2019-11-07-0724.csv</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div tabIndex="0" hidefocus=""
                                        ></div>
                                </div>
                            </div>
                </div>

                <div className="running-tasks-container action-type-container">
                    <hr />
                        <h5 className="hd hd-3">Текущие задачи</h5>
                        <div className="running-tasks-section">
                            <p>Состояние всех активных процессов отображается в нижеприведённой таблице. </p>
                            <br/>
                                <div className="running-tasks-table"
                                     data-endpoint="/courses/course-v1:urfu+ENGM+fall_2015/instructor/api/list_instructor_tasks"></div>
                        </div>
                        <div className="no-pending-tasks-message"><p>Нет задач.</p></div>
                </div>

            </section>
        </>
    )
}
export default CourseReportsView
