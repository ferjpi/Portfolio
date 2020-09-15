import React, { useState } from "react"
import { Link } from "gatsby"

import profile from "../images/Profile.png"
import inst from "../images/Instagram.png"
import github from "../images/Github.png"
import lin from "../images/Linkedin.png"
import twit from "../images/Twitter.png"

// css
import "./sideMenu.css"

const SideMenu = () => {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <div id="sideMenu">
      <menu
        className="container_profile__menu_mobile main"
        onClick={() => setShowMenu(true)}
      >
        <span className="profile_menu_mobile__line"></span>
        <span className="profile_menu_mobile__line"></span>
        <span className="profile_menu_mobile__line"></span>
      </menu>
      <div className={showMenu ? "sideMenu_box show" : "sideMenu_box hide"}>
        <div className="sideMenu_box__container">
          <div className="box_container__profile">
            <menu
              className="container_profile__menu_mobile"
              onClick={() => setShowMenu(false)}
            >
              <span>
                <svg
                  width="30px"
                  height="30px"
                  viewBox="0 0 35 35"
                  version="1.1"
                  space="preserve"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  strokeLinejoin="round"
                  strokeMiterlimit="2"
                >
                  <path
                    id="Cancel"
                    d="M17.061,14.939l14.939,-14.939c0.707,0.707 1.414,1.414 2.121,2.121l-14.939,14.94l14.939,14.939l-2.121,2.121l-14.939,-14.939l-14.94,14.939l-2.121,-2.121l14.939,-14.939l-14.939,-14.94l2.121,-2.121l14.94,14.939Z"
                    fill="#fff"
                  />
                </svg>
              </span>
              {/* <span className="profile_menu_mobile__line"></span>
              <span className="profile_menu_mobile__line"></span>
              <span className="profile_menu_mobile__line"></span> */}
            </menu>
            <h3 className="container_profile__name">Fernando Pineda</h3>
            <div className="container_profile__img">
              <img src={profile} alt="profile" className="profile_img" />
            </div>
            <p className="container_profile__summary">
              Hi, my name is Fernando Pineda and I'm a Web Software Engineer.
              Welcome to my personal website
            </p>
            <div className="container_profile__social_media">
              <span className="social_media__icon">
                <a
                  href="https://www.instagram.com/fernandojpineda"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={inst}
                    alt="instagram"
                    className="media_icon--instagram"
                  />
                </a>
              </span>
              <span className="social_media__icon">
                <a
                  href="https://github.com/ferjpi"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={github}
                    alt="github"
                    className="media_icon--github"
                  />
                </a>
              </span>
              <span className="social_media__icon">
                <a
                  href="https://www.linkedin.com/in/fernando-pineda-trujillo-79453566/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={lin}
                    alt="linkedin"
                    className="media_icon--linkedin"
                  />
                </a>
              </span>
              <span className="social_media__icon">
                <a
                  href="https://twitter.com/fernandojpineda"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={twit}
                    alt="twitter"
                    className="media_icon--twitter"
                  />
                </a>
              </span>
            </div>
          </div>

          <hr />

          <div className="box_container__menu">
            <ul className="container_menu__list">
              <li className="menu_list__item">
                <Link to="/" className="menu_list_item__link">
                  <span className="list_item__icon">
                    <svg viewBox="0 0 78 78">
                      <path d="M48.3 41.2C54.8 37.2 59 29.3 59 22c0-10.4-8.5-22-20-22S19 11.6 19 22c0 7.3 4.2 15.2 10.7 19.2C14.3 45.3 3 59.4 3 76c0 1.1.9 2 2 2h68c1.1 0 2-.9 2-2 0-16.6-11.3-30.7-26.7-34.8zM23 22c0-10.3 8.5-18 16-18s16 7.7 16 18-8.5 18-16 18-16-7.7-16-18zM7.1 74c1-16.7 15-30 31.9-30s30.9 13.3 31.9 30H7.1z" />
                    </svg>
                  </span>
                  <span className="list_item__text">About Me</span>
                </Link>
              </li>
              <li className="menu_list__item">
                <Link to="/portfolio" className="menu_list_item__link">
                  <span className="list_item__icon">
                    <svg viewBox="0 0 80 80">
                      <path d="M74 7H6a6.02 6.02 0 0 0-6 6v42a6.02 6.02 0 0 0 6 6h22v4.2c-.1.4-.9 1.5-1.3 2-1.1 1.4-2.2 2.8-1.4 4.4.3.7 1.1 1.4 2.7 1.4h23c1 0 3.3 0 4.1-1.8s-.6-3.2-1.8-4.5c-.4-.5-1.1-1.2-1.3-1.6V61h22a6.02 6.02 0 0 0 6-6V13a6.02 6.02 0 0 0-6-6zM30.3 69c.9-1.1 1.7-2.4 1.7-3.8V61h16v4.2c0 1.4 1 2.7 2 3.8H30.3zM76 55c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2v-6h72v6zm0-10H4V13c0-1.1.9-2 2-2h68c1.1 0 2 .9 2 2v32z" />
                    </svg>
                  </span>
                  <span className="list_item__text">Portfolio</span>
                </Link>
              </li>

              <li className="menu_list__item">
                <Link to="/posts" className="menu_list_item__link">
                  <span className="list_item__icon">
                    <svg
                      width="612.059"
                      height="612.06"
                      viewBox="0 0 612.06 612.06"
                    >
                      <path d="M535.607 564.354a9.57 9.57 0 0 1-9.565 9.564c-5.26 0-9.564-4.285-9.564-9.564V9.565A9.57 9.57 0 0 1 526.042 0a9.57 9.57 0 0 1 9.565 9.565v554.8zM19.18 602.494c0 5.262-4.284 9.565-9.565 9.565-5.26 0-9.565-4.284-9.565-9.565V9.605A9.57 9.57 0 0 1 9.615.04a9.57 9.57 0 0 1 9.565 9.565v592.9z" />
                      <path d="M9.595 612.02c-5.26 0-9.565-4.284-9.565-9.563a9.57 9.57 0 0 1 9.565-9.566h592.87a9.57 9.57 0 0 1 9.565 9.566c0 5.26-4.284 9.563-9.565 9.563H9.595z" />
                      <path d="M612.03 602.475c0 5.26-4.284 9.564-9.565 9.564a9.57 9.57 0 0 1-9.564-9.564V66.977a9.57 9.57 0 0 1 9.564-9.565 9.57 9.57 0 0 1 9.565 9.565v535.498zM9.595 19.17A9.57 9.57 0 0 1 .03 9.605 9.57 9.57 0 0 1 9.595.04H526.04a9.57 9.57 0 0 1 9.565 9.565c0 5.26-4.284 9.565-9.565 9.565H9.595zm248.638 76.483a9.57 9.57 0 0 1-9.565-9.565 9.57 9.57 0 0 1 9.565-9.565H449.52a9.57 9.57 0 0 1 9.564 9.565 9.57 9.57 0 0 1-9.564 9.565H258.233zM86.098 76.522h95.593a9.57 9.57 0 0 1 9.565 9.565v76.522a9.57 9.57 0 0 1-9.565 9.565H86.098a9.57 9.57 0 0 1-9.565-9.565V86.086c-.001-5.26 4.284-9.564 9.565-9.564h0zm86.048 19.13H95.663v57.392h76.482l.001-57.392zm401.662 468.68a9.57 9.57 0 0 1-9.565 9.566 9.57 9.57 0 0 1-9.563-9.566V47.846c0-5.26 4.283-9.565 9.563-9.565a9.57 9.57 0 0 1 9.565 9.565v516.486zm-487.7-315.634a9.57 9.57 0 0 1-9.565-9.565 9.57 9.57 0 0 1 9.565-9.565h191.266a9.57 9.57 0 0 1 9.565 9.565 9.57 9.57 0 0 1-9.565 9.565H86.118zm0 76.502a9.57 9.57 0 0 1-9.565-9.566 9.57 9.57 0 0 1 9.565-9.565h191.266a9.57 9.57 0 0 1 9.565 9.565 9.57 9.57 0 0 1-9.565 9.566H86.118zm-.02 153.085a9.57 9.57 0 0 1-9.565-9.566 9.57 9.57 0 0 1 9.565-9.563h363.48a9.57 9.57 0 0 1 9.565 9.563 9.57 9.57 0 0 1-9.565 9.566H86.098z" />
                      <path d="M353.886 229.567h95.652a9.57 9.57 0 0 1 9.564 9.565v153.004c0 5.263-4.284 9.566-9.564 9.566h-95.652c-5.262 0-9.565-4.285-9.565-9.566V239.132c0-5.26 4.304-9.565 9.565-9.565h0zm86.088 19.13h-76.522v133.875h76.522V248.698zm-181.74-76.522a9.57 9.57 0 0 1-9.565-9.565c0-5.26 4.284-9.565 9.565-9.565H449.52a9.57 9.57 0 0 1 9.564 9.565 9.57 9.57 0 0 1-9.564 9.565H258.233zM86.118 401.723a9.57 9.57 0 0 1-9.565-9.563 9.57 9.57 0 0 1 9.565-9.566h191.266a9.57 9.57 0 0 1 9.565 9.566c0 5.26-4.284 9.563-9.565 9.563H86.118z" />
                    </svg>
                  </span>
                  <span className="list_item__text">Blog</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SideMenu
