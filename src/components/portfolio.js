import React from "react"

// css
import "./portfolio.css"

const PortfolioComp = () => {
  return (
    <div className="portfolio_container">
      <ul className="portfolio_container__list">
        <li className="container_list__item">
          <a
            href="https://presupuesto.fernandojpt1203.now.sh/"
            target="_blank"
            rel="noreferrer"
            className="list_item__link"
          >
            Presupuesto
          </a>
          <p className="list_item__paragraph">
            This project was one of the first I made When I was learning ReactJs
            and connect the Front End with a Backend made with NodeJs
          </p>
        </li>
        <li className="container_list__item">
          <a
            href="https://bearaby.com/"
            target="_blank"
            rel="noreferrer"
            className="list_item__link"
          >
            Bearaby
          </a>
        </li>
        <li className="container_list__item">
          <a
            href="https://ferjpi.github.io/platzipalooza/"
            target="_blank"
            rel="noreferrer"
            className="list_item__link"
          >
            Platzipalooza
          </a>
        </li>
        <li className="container_list__item">
          <a
            href="https://ferjpi.github.io/Gelatos-shop/"
            target="_blank"
            rel="noreferrer"
            className="list_item__link"
          >
            Gelatos
          </a>
        </li>
        <li className="container_list__item">
          <a
            href="https://ferjpi.github.io/platzishop/"
            target="_blank"
            rel="noreferrer"
            className="list_item__link"
          >
            Platzishop
          </a>
        </li>
      </ul>
    </div>
  )
}

export default PortfolioComp
