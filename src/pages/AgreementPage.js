import React from 'react'
import contract from "../static/offer.pdf";

const AgreementPage = () => {
  return (
      <>
          <h2>Соглашение</h2>
          <a href={contract} className="btn btn-primary" download>Скачать</a>
      </>
  )
}

export default AgreementPage
