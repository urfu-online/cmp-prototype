import React from 'react'
import contract from '../static/contract.docx'

const СontractPage = () => {
  return (
        <>
            <h2>Договор на оказания услуг</h2>
            <a href={contract} className="btn btn-primary" download>Скачать</a>
        </>
  )
}
export default СontractPage
