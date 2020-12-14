import React  from "react";

const CourseExportView = ({course}) => {
    return (
        <>
            <h4>Экспорт</h4>
            <article className="content-primary" role="main">
                <div className="introduction">
                    <p>Вы можете экспортировать курсы и редактировать их вне Studio. Экспортируемый файл имеет формат .tar.gz (это файл .tar, сжатый при помощи GNU Zip) и содержит структуру и материалы учебного курса. Вы также можете повторно импортировать ранее экспортированный учебный курс.</p>
                    <p><strong>Внимание:</strong> когда вы экспортируете курс, такая информация как ключи MATLAB API, регистрационные данные LTI, секретные строки и URL-адрес хранилища примечаний включаются в экспортируемые данные. Если вы раздаёте экспортируемые файлы, вы можете поделиться конфиденциальной или лицензируемой информацией</p>
                </div>

                <form id="fileupload" method="post" encType="multipart/form-data" className="import-form">

                    <h5 className="title">
                        Экспорт содержимого учебного курса
                    </h5>

                    <p className="error-block"></p>
                    <div className="wrapper wrapper-file-name file-name-block">

                        <input type="submit" value=" Экспортировать содержимое учебного курса " className="btn btn-primary btn-block"
                               id="replace-courselike-button"/>
                    </div>
                </form>
            </article>
        </>
    )
}
export default CourseExportView
