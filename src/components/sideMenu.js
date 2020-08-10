import React from "react"

import profile from "../images/Profile.png"
import inst from "../images/Instagram.png"
import github from "../images/Github.png"
import lin from "../images/Linkedin.png"
import twit from "../images/Twitter.png"

// css
import "./sideMenu.css"

const SideMenu = () => {
  return (
    <div id="sideMenu">
      <div className="sideMenu_box">
        <div className="sideMenu_box__container">
          <div className="box_container__profile">
            <h3 className="container_profile__name">Fernando Pineda</h3>
            <div className="container_profile__img">
              <img src={profile} alt="profile" className="profile_img" />
            </div>
            <p className="container_profile__summary">
              Hi, my name is Fernando Pineda and I'm a Full Stack JavaScript
              developer. Welcome to my personal website
            </p>
            <div className="container_profile__social_media">
              <span className="social_media__icon">
                <img
                  src={inst}
                  alt="instagram"
                  className="media_icon--instagram"
                />
              </span>
              <span className="social_media__icon">
                <img src={github} alt="github" className="media_icon--github" />
              </span>
              <span className="social_media__icon">
                <img
                  src={lin}
                  alt="linkedin"
                  className="media_icon--linkedin"
                />
              </span>
              <span className="social_media__icon">
                <img src={twit} alt="twitter" className="media_icon--twitter" />
              </span>
            </div>
          </div>

          <hr />

          <div className="box_container__menu">
            <ul className="container_menu__list">
              <li className="menu_list__item">
                <span className="list_item__icon">
                  <svg viewBox="0 0 78 78">
                    <path d="M48.3 41.2C54.8 37.2 59 29.3 59 22c0-10.4-8.5-22-20-22S19 11.6 19 22c0 7.3 4.2 15.2 10.7 19.2C14.3 45.3 3 59.4 3 76c0 1.1.9 2 2 2h68c1.1 0 2-.9 2-2 0-16.6-11.3-30.7-26.7-34.8zM23 22c0-10.3 8.5-18 16-18s16 7.7 16 18-8.5 18-16 18-16-7.7-16-18zM7.1 74c1-16.7 15-30 31.9-30s30.9 13.3 31.9 30H7.1z" />
                  </svg>
                </span>
                About Me
              </li>
              <li className="menu_list__item">
                <span className="list_item__icon">
                  <svg viewBox="0 0 80 80">
                    <path d="M74 7H6a6.02 6.02 0 0 0-6 6v42a6.02 6.02 0 0 0 6 6h22v4.2c-.1.4-.9 1.5-1.3 2-1.1 1.4-2.2 2.8-1.4 4.4.3.7 1.1 1.4 2.7 1.4h23c1 0 3.3 0 4.1-1.8s-.6-3.2-1.8-4.5c-.4-.5-1.1-1.2-1.3-1.6V61h22a6.02 6.02 0 0 0 6-6V13a6.02 6.02 0 0 0-6-6zM30.3 69c.9-1.1 1.7-2.4 1.7-3.8V61h16v4.2c0 1.4 1 2.7 2 3.8H30.3zM76 55c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2v-6h72v6zm0-10H4V13c0-1.1.9-2 2-2h68c1.1 0 2 .9 2 2v32z" />
                  </svg>
                </span>
                Portfolio
              </li>
              <li className="menu_list__item">
                <span className="list_item__icon">
                  <svg width="792" height="792" viewBox="0 0 792 792">
                    <path d="M216 432h360v36H216zm0 108h360v36H216zm0-432h216v36H216zm0 540h360v36H216zm0-324h360v36H216zm450.54 468S684 792 684 774.396V158.4L526.896 0H125.46S108 0 108 17.604V774.36C108 792 125.46 792 125.46 792h541.08zM144 36h360v108c0 36 36 36 36 36h108v576H144V36zm72 180h360v36H216z" />
                  </svg>
                </span>
                Resume
              </li>
              <li className="menu_list__item">
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
                Blog
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SideMenu
