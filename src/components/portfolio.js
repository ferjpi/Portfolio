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
            and connect the Front End with a Backend service made with NodeJs
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
          <p className="list_item__paragraph">
            It was a project that I was involved in my first job. It consisted
            of update the design of the page using HTML, CSS, JavaScript and
            Liquid. The page is hosted in Shopify.
          </p>
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
          <p className="list_item__paragraph">
            This was one of my firsts projects. Here I was trying to learn
            Foundation which is a framework specialize in CSS. Very similar to
            Bootstrap. Its written in HTML, CSS and Javascript.
          </p>
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
          <p className="list_item__paragraph">
            It uses Foundation which is a framework specialize in CSS. Very
            similar to Bootstrap. Its written in HTML, CSS and Javascript.
          </p>
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
          <p className="list_item__paragraph">
            It was a project completely made with HTML, CSS, and Javascript.
          </p>
        </li>
      </ul>
    </div>
  )
}

export default PortfolioComp
