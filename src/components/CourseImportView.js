import React  from "react";

const CourseImportView = ({course}) => {
    return (
        <>
            <h4>Импорт</h4>
            <article className="content-primary" role="main">
                <div className="introduction">
                    <p>Прежде чем продолжить, убедитесь, что вы хотите именно импортировать курс. Импортированное
                        содержимое полностью заменит собой материалы данного курса. <strong>Вы не сможете отменить
                            импорт курса</strong>. Мы рекомендуем сначала экспортировать текущий курс, чтобы у вас
                        сохранилась его резервная копия.</p>
                    <p>Курс, который вы импортируете, должен быть в формате .tar.gz (т. е. файл с расширением .tar,
                        сжатый с помощью программы GNU Zip). Файл .tar.gz должен содержать файл course.xml. Он также
                        может содержать и другие файлы.</p>
                    <p>Процесс импорта состоит из пяти стадий. В течение первых двух вы должны оставаться на этой
                        странице. Вы можете покинуть страницу после завершения стадии распаковки. Мы рекомендуем вам не
                        делать важных изменений в курсе, пока импорт не будет завершён.</p>

                </div>

                <form id="fileupload" method="post" encType="multipart/form-data" className="import-form">

                    <h5 className="title">
                        Выберите файл .tar.gz, чтобы заменить содержимое вашего курса
                    </h5>

                    <p className="error-block"></p>
                    <div className="wrapper wrapper-file-name file-name-block">


                        <input type="file" name="course-data" className="btn btn-secondary btn-block " />

                        <input type="submit" value="Заменить мой курс выбранным файлом" className="btn btn-primary btn-block"
                                   id="replace-courselike-button"/>
                    </div>
                </form>
            </article>
        </>
    )
}
export default CourseImportView
