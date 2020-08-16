import React from "react"

import jest from "../images/Jest.png"

// css
import "./ContentAboutMe.css"

const ContentAboutMe = () => {
  return (
    <div className="content_about_me">
      <div className="about_me__question">
        <h4 className="about_me_question__title">Who am I?</h4>
        <span className="about_me_question__description">
          I’m the kind of person that always is listening to music but can’t
          sing o play any instrument. In my free time, I like to go to the
          movies or stay at home watching a good TV Show. In-person I’m a little
          shy but I like to meet new people, though.
        </span>
      </div>

      <div className="about_me__question">
        <h4 className="about_me_question__title">What's my background</h4>
        <span className="about_me_question__description">
          I always feel interested in technology and how things work, that's why
          I started learning about programming language. My First approach was
          with Python, then with HTML5, CSS3 and JavaScript. My strengths are in
          front end development working with JavaScript by my side but that
          doesn't mean that I haven't work in the backend. I also had worked
          with Ruby and ROR. I'm always trying to stay updated on new
          technologies and better practices.
        </span>
      </div>
      <div className="about_me__question">
        <h4 className="about_me_question__title">My skills</h4>
        <ul className="about_me_question__description">
          <li className="question_description__element">
            <span className="description_element__icon">
              <svg width="48" height="48" viewBox="0 0 48 48">
                <path fill="#e65100" d="M41 5H7l3 34 14 4 14-4 3-34z" />
                <path fill="#ff6d00" d="M24 8v31.9l11.2-3.2L37.7 8z" />
                <path
                  fill="#fff"
                  d="M24 25v-4h8.6l-.7 11.5-7.9 2.6v-4.2l4.1-1.4.3-4.5H24zm8.9-8l.3-4H24v4h8.9z"
                />
                <path
                  fill="#eee"
                  d="M24 30.9v4.2l-7.9-2.6-.4-5.5h4l.2 2.5 4.1 1.4zM19.1 17H24v-4h-9.1l.7 12H24v-4h-4.6l-.3-4z"
                />
              </svg>
            </span>
            HTML5
          </li>
          <li className="question_description__element">
            <span className="description_element__icon">
              <svg width="48" height="48" viewBox="0 0 48 48">
                <path fill="#0277bd" d="M41 5H7l3 34 14 4 14-4 3-34z" />
                <path fill="#039be5" d="M24 8v31.9l11.2-3.2L37.7 8z" />
                <path
                  fill="#fff"
                  d="M33.1 13H24v4h4.9l-.3 4H24v4h4.4l-.3 4.5-4.1 1.4v4.2l7.9-2.6.7-11.5z"
                />
                <path
                  fill="#eee"
                  d="M24 13v4h-8.9l-.3-4H24zm-4.6 8l.2 4H24v-4h-4.6zm.4 6h-4l.3 5.5 7.9 2.6v-4.2l-4.1-1.4-.1-2.5z"
                />
              </svg>
            </span>
            CSS3 / Sass
          </li>
          <li className="question_description__element">
            <span className="description_element__icon">
              <svg width="48" height="48" viewBox="0 0 48 48">
                <path fill="#ffd600" d="M6,42V6h36v36H6z" />
                <path
                  fill="#000001"
                  d="M29.538 32.947c.692 1.124 1.444 2.2 3.037 2.2 1.338 0 2.04-.665 2.04-1.585 0-1.1-.726-1.492-2.198-2.133l-.807-.344c-2.33-.988-3.878-2.226-3.878-4.84 0-2.4 1.845-4.244 4.728-4.244 2.053 0 3.528.71 4.592 2.573l-2.514 1.607c-.553-.988-1.15-1.377-2.078-1.377-.946 0-1.545.597-1.545 1.377 0 .964.6 1.354 1.985 1.95l.807.344C36.452 29.645 38 30.84 38 33.523 38 36.415 35.716 38 32.65 38c-3 0-4.702-1.505-5.65-3.368l2.538-1.685zm-11.586.082c.506.906 1.275 1.603 2.38 1.603 1.058 0 1.667-.418 1.667-2.043V22h3.333v11.1c0 3.367-1.953 4.9-4.805 4.9-2.577 0-4.437-1.746-5.195-3.368l2.62-1.603z"
                />
              </svg>
            </span>
            JavaScript (ES6)
          </li>
          <li className="question_description__element">
            <span className="description_element__icon">
              <svg width="100" height="100" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="7" fill="#39c1d7" />
                <path
                  fill="#1f212b"
                  d="M50,58c-4.411,0-8-3.589-8-8s3.589-8,8-8s8,3.589,8,8S54.411,58,50,58z M50,44c-3.309,0-6,2.691-6,6 s2.691,6,6,6s6-2.691,6-6S53.309,44,50,44z"
                />
                <path
                  fill="#39c1d7"
                  d="M88.5 50c0-5.376-6.474-10.03-16.518-12.798 2.582-10.096 1.787-18.035-2.827-20.73-1.82-1.063-4.028-1.257-6.562-.58-3.818 1.022-8.193 4-12.593 8.4-4.4-4.39-8.775-7.376-12.593-8.4-2.534-.68-4.742-.484-6.562.58-4.614 2.694-5.41 10.632-2.827 20.73C17.974 39.97 11.5 44.624 11.5 50s6.474 10.03 16.518 12.8c-2.582 10.096-1.787 18.035 2.827 20.73 1.112.65 2.368.976 3.756.975.883 0 1.82-.132 2.806-.396 3.818-1.023 8.193-4 12.593-8.4 4.4 4.39 8.775 7.376 12.593 8.4.986.264 1.923.396 2.806.396 1.388 0 2.644-.325 3.756-.975 4.614-2.694 5.408-10.633 2.827-20.73C82.026 60.03 88.5 55.376 88.5 50zM63.37 18.79c.725-.193 1.397-.29 2.016-.29.86 0 1.616.188 2.257.563 3.092 1.806 3.723 8.42 1.42 17.41-3.173-.714-6.635-1.25-10.314-1.583-2.16-3.113-4.405-5.947-6.668-8.43 4.018-4.027 7.96-6.78 11.29-7.67zM60.755 56.3c-1.18 2.066-2.42 4.045-3.693 5.94A94.7 94.7 0 0 1 50 62.5c-2.446 0-4.802-.093-7.06-.262-1.273-1.894-2.514-3.873-3.693-5.94-1.22-2.136-2.313-4.24-3.293-6.298.98-2.058 2.074-4.162 3.293-6.3 1.18-2.067 2.42-4.046 3.694-5.94 2.26-.17 4.614-.262 7.06-.262s4.8.093 7.06.262a96.07 96.07 0 0 1 3.694 5.94c1.22 2.136 2.313 4.24 3.293 6.3-.98 2.058-2.074 4.162-3.293 6.298zm4.89-2.754a75.25 75.25 0 0 1 2.597 7.082c-2.275.507-4.73.93-7.354 1.243.842-1.326 1.672-2.682 2.473-4.085.81-1.42 1.568-2.834 2.284-4.24zM50 71.357c-1.636-1.81-3.27-3.812-4.864-5.98 1.592.077 3.212.122 4.864.122s3.272-.045 4.864-.122c-1.595 2.166-3.228 4.17-4.864 5.98zM39.112 61.87c-2.622-.313-5.08-.736-7.354-1.243a75.15 75.15 0 0 1 2.597-7.082 100.95 100.95 0 0 0 2.284 4.24 101.18 101.18 0 0 0 2.473 4.085zm-4.756-15.414a74.9 74.9 0 0 1-2.597-7.084c2.275-.507 4.732-.93 7.355-1.243a100.32 100.32 0 0 0-2.473 4.086c-.812 1.42-1.57 2.835-2.285 4.24zM50 28.644c1.636 1.81 3.27 3.812 4.864 5.98-1.592-.078-3.212-.123-4.864-.123s-3.272.045-4.864.122c1.595-2.166 3.228-4.17 4.864-5.978zm13.36 13.572a100.77 100.77 0 0 0-2.473-4.086c2.623.313 5.08.736 7.355 1.243a75.28 75.28 0 0 1-2.597 7.084 100.39 100.39 0 0 0-2.285-4.241zM32.358 19.063c.642-.375 1.396-.563 2.257-.563.618 0 1.292.098 2.016.29 3.33.892 7.27 3.643 11.29 7.67-2.263 2.482-4.51 5.317-6.668 8.43-3.68.332-7.142.87-10.314 1.583-2.303-8.99-1.672-15.605 1.42-17.4zM14.5 50c0-3.596 5.4-7.44 14.335-9.9.97 3.16 2.24 6.486 3.806 9.9-1.565 3.415-2.837 6.742-3.806 9.9C19.9 57.44 14.5 53.596 14.5 50zm22.13 31.21c-1.733.462-3.17.37-4.273-.27-3.092-1.806-3.722-8.42-1.42-17.41 3.172.714 6.635 1.25 10.313 1.583 2.16 3.113 4.405 5.947 6.668 8.43-4.017 4.026-7.96 6.777-11.288 7.67zm31.01-.27c-1.103.644-2.54.734-4.273.27-3.33-.892-7.27-3.643-11.29-7.67 2.263-2.482 4.51-5.317 6.668-8.43 3.68-.332 7.14-.87 10.313-1.583 2.304 8.992 1.673 15.606-1.42 17.412zM71.165 59.9c-.97-3.16-2.24-6.486-3.806-9.9 1.565-3.415 2.837-6.743 3.806-9.9C80.1 42.56 85.5 46.404 85.5 50s-5.4 7.44-14.335 9.9z"
                />
                <path
                  fill="#1f212b"
                  d="M34.595 85.002c-1.47 0-2.817-.35-4-1.043-4.632-2.705-5.783-10.276-3.178-20.81C16.975 60.18 11 55.4 11 50s5.975-10.18 16.415-13.148c-2.604-10.535-1.453-18.106 3.18-20.81 1.938-1.134 4.273-1.346 6.943-.63 3.718.996 8.02 3.82 12.463 8.18 4.444-4.36 8.746-7.183 12.463-8.18 2.67-.714 5.005-.502 6.944.63 4.63 2.705 5.782 10.276 3.178 20.81C83.025 39.82 89 44.6 89 50s-5.975 10.18-16.415 13.148c2.604 10.535 1.454 18.105-3.178 20.81-1.927 1.125-4.286 1.342-6.943.63-3.72-.996-8.02-3.82-12.464-8.178-4.443 4.358-8.745 7.183-12.463 8.178-1.023.274-2.01.413-2.936.413zM34.604 16c-1.3 0-2.474.302-3.507.906-4.224 2.467-5.194 10.008-2.595 20.173a.5.5 0 0 1-.352.606C18.038 40.472 12 45.077 12 50s6.038 9.528 16.15 12.316a.5.5 0 0 1 .352.606c-2.6 10.165-1.63 17.707 2.594 20.173 1.03.6 2.207.906 3.498.906.844 0 1.744-.127 2.683-.378 3.647-.977 7.925-3.836 12.37-8.27a.5.5 0 0 1 .706 0c4.444 4.433 8.722 7.292 12.37 8.27 2.394.64 4.485.46 6.18-.528 4.224-2.467 5.194-10.008 2.594-20.173a.5.5 0 0 1 .352-.606C81.962 59.528 88 54.923 88 50s-6.038-9.528-16.15-12.316a.5.5 0 0 1-.352-.606c2.6-10.165 1.63-17.707-2.595-20.173-1.7-.993-3.78-1.17-6.18-.528-3.647.977-7.924 3.836-12.37 8.27a.5.5 0 0 1-.706 0c-4.445-4.434-8.722-7.293-12.37-8.27-.94-.252-1.833-.378-2.673-.378zm30.782 66c-.663 0-1.38-.102-2.146-.307-3.33-.893-7.312-3.59-11.514-7.8a.5.5 0 0 1-.016-.69c2.265-2.484 4.494-5.303 6.627-8.378.084-.122.218-.2.366-.213 3.612-.326 7.06-.855 10.25-1.573a.5.5 0 0 1 .594.364c2.336 9.123 1.703 16.008-1.652 17.967h0c-.72.42-1.558.63-2.508.63zM52.77 73.52c3.95 3.894 7.653 6.38 10.727 7.205 1.6.427 2.91.353 3.892-.22h0c2.855-1.668 3.357-8.073 1.306-16.387-3.028.66-6.277 1.152-9.67 1.467-2.016 2.892-4.118 5.558-6.255 7.935zM34.614 82c-.95 0-1.79-.2-2.508-.63-3.355-1.96-3.99-8.845-1.652-17.968.067-.262.333-.42.594-.364 3.188.718 6.636 1.247 10.25 1.573a.5.5 0 0 1 .366.213c2.133 3.075 4.362 5.894 6.627 8.378a.5.5 0 0 1-.016.69c-4.202 4.2-8.183 6.907-11.513 7.8h0c-.768.204-1.485.307-2.147.307zm-3.3-17.88c-2.05 8.313-1.55 14.72 1.306 16.387.982.572 2.292.647 3.892.22h0c3.074-.824 6.776-3.312 10.727-7.205-2.136-2.377-4.238-5.043-6.254-7.935-3.393-.315-6.643-.808-9.67-1.467zM50 71.856a.5.5 0 0 1-.371-.165c-1.663-1.84-3.3-3.864-4.896-6.018a.5.5 0 0 1-.038-.533c.09-.17.26-.274.465-.263a97.06 97.06 0 0 0 9.68 0 .49.49 0 0 1 .465.263.5.5 0 0 1-.038.533c-1.586 2.153-3.233 4.178-4.896 6.018a.5.5 0 0 1-.371.165zm-3.833-5.932c1.25 1.655 2.537 3.226 3.833 4.684 1.297-1.458 2.582-3.028 3.833-4.684-2.612.1-5.054.1-7.666 0zM50 63c-2.37 0-4.757-.088-7.1-.263a.5.5 0 0 1-.378-.22c-1.337-1.99-2.586-3.998-3.712-5.97-1.18-2.068-2.294-4.198-3.3-6.332a.5.5 0 0 1 0-.43c1.016-2.134 2.13-4.264 3.3-6.332a96.89 96.89 0 0 1 3.713-5.971.5.5 0 0 1 .378-.22c4.684-.35 9.513-.35 14.196 0a.5.5 0 0 1 .378.22 96.89 96.89 0 0 1 3.713 5.971c1.18 2.068 2.294 4.198 3.3 6.332a.5.5 0 0 1 0 .43c-1.016 2.134-2.13 4.264-3.3 6.332h0c-1.126 1.972-2.375 3.98-3.712 5.97a.5.5 0 0 1-.378.22c-2.342.175-4.73.263-7.1.263zm-6.782-1.243c4.48.322 9.085.322 13.563 0 1.273-1.903 2.463-3.822 3.54-5.707 1.128-1.977 2.195-4.01 3.173-6.05a96 96 0 0 0-3.173-6.05 95.28 95.28 0 0 0-3.54-5.708c-4.48-.322-9.084-.322-13.563 0-1.274 1.906-2.465 3.825-3.54 5.708-1.128 1.977-2.195 4.01-3.173 6.05a96 96 0 0 0 3.173 6.05c1.078 1.886 2.268 3.804 3.54 5.707zm17.67.614a.5.5 0 0 1-.422-.768c.928-1.46 1.733-2.79 2.46-4.065.764-1.338 1.528-2.758 2.273-4.22a.51.51 0 0 1 .463-.272.5.5 0 0 1 .443.305c1.015 2.4 1.894 4.798 2.614 7.13.042.133.025.278-.045.398a.5.5 0 0 1-.324.237c-2.35.525-4.84.946-7.403 1.252a.6.6 0 0 1-.059.003zm4.708-7.64c-.594 1.138-1.198 2.245-1.8 3.302a96.26 96.26 0 0 1-1.92 3.209 73.75 73.75 0 0 0 5.727-.987c-.577-1.814-1.25-3.665-2.006-5.524zm-26.484 7.64c-.02 0-.04-.001-.06-.003-2.56-.307-5.052-.728-7.402-1.253a.5.5 0 0 1-.369-.635 75.72 75.72 0 0 1 2.614-7.129.5.5 0 0 1 .443-.305c.182-.02.375.1.463.272.745 1.46 1.51 2.88 2.273 4.22.728 1.274 1.533 2.604 2.46 4.065a.5.5 0 0 1-.422.769zM32.4 60.255a73.75 73.75 0 0 0 5.727.987 94.58 94.58 0 0 1-1.92-3.209 100.14 100.14 0 0 1-1.801-3.302c-.758 1.86-1.43 3.7-2.006 5.524zm38.766.146a.5.5 0 0 1-.478-.354c-.975-3.18-2.248-6.49-3.782-9.838a.5.5 0 0 1 0-.417c1.534-3.35 2.807-6.66 3.783-9.84.08-.26.354-.404.61-.335C80.367 42.116 86 46.094 86 50s-5.634 7.884-14.703 10.383c-.044.012-.09.018-.132.018zM67.91 50c1.436 3.155 2.643 6.277 3.59 9.288C79.717 56.945 85 53.322 85 50s-5.283-6.945-13.502-9.288c-.947 3.012-2.154 6.134-3.59 9.288zM28.835 60.4c-.044 0-.088-.006-.133-.018C19.634 57.884 14 53.906 14 50s5.633-7.884 14.702-10.383c.258-.07.53.076.61.335.976 3.18 2.25 6.49 3.783 9.84a.5.5 0 0 1 0 .417c-1.535 3.35-2.807 6.66-3.782 9.838a.5.5 0 0 1-.479.354zm-.333-19.69C20.283 43.055 15 46.678 15 50s5.283 6.945 13.502 9.288c.947-3.01 2.153-6.132 3.59-9.288-1.435-3.154-2.642-6.276-3.59-9.288zm37.143 6.245a.5.5 0 0 1-.446-.273 99.07 99.07 0 0 0-2.272-4.22h0c-.726-1.272-1.53-2.602-2.46-4.066a.5.5 0 0 1 .482-.765c2.563.307 5.054.728 7.404 1.252a.5.5 0 0 1 .369.635c-.72 2.336-1.6 4.735-2.614 7.13a.5.5 0 0 1-.443.305zm-1.85-4.99a97.02 97.02 0 0 1 1.801 3.302c.756-1.856 1.428-3.71 2.005-5.525-1.837-.394-3.757-.725-5.728-.987a91.26 91.26 0 0 1 1.922 3.21h0zm-29.44 4.99c-.212-.007-.385-.125-.46-.305-1.013-2.396-1.893-4.795-2.614-7.13-.042-.133-.025-.278.045-.398a.5.5 0 0 1 .324-.237c2.35-.525 4.84-.946 7.404-1.252.195-.02.38.067.483.23a.5.5 0 0 1-.001.535c-.93 1.464-1.735 2.794-2.46 4.066-.77 1.35-1.515 2.73-2.272 4.22-.087.167-.26.272-.447.272zM32.4 39.745c.577 1.816 1.25 3.67 2.005 5.525.597-1.144 1.2-2.232 1.8-3.302.583-1.02 1.215-2.078 1.92-3.2a73.75 73.75 0 0 0-5.727.987zm36.664-2.77c-.037 0-.073-.004-.1-.012-3.188-.718-6.637-1.247-10.25-1.573a.5.5 0 0 1-.366-.213C56.204 32.1 53.974 29.282 51.7 26.8a.5.5 0 0 1 .016-.69c4.2-4.2 8.183-6.908 11.514-7.8h0c1.87-.5 3.438-.387 4.654.322 3.355 1.96 3.99 8.845 1.653 17.968a.5.5 0 0 1-.484.375zm-10.038-2.56c3.393.315 6.643.808 9.67 1.467 2.05-8.313 1.55-14.72-1.307-16.387-.98-.57-2.29-.646-3.89-.22-3.074.824-6.777 3.312-10.728 7.206 2.137 2.375 4.24 5.04 6.255 7.934zm-28.088 2.56a.5.5 0 0 1-.484-.376c-2.336-9.123-1.703-16.007 1.652-17.967 1.217-.71 2.788-.822 4.654-.322 3.332.893 7.313 3.6 11.514 7.8a.5.5 0 0 1 .016.69c-2.264 2.483-4.494 5.302-6.627 8.377-.084.122-.218.2-.366.213-3.612.326-7.06.855-10.25 1.573a.5.5 0 0 1-.109.012zm1.673-17.48c-2.855 1.668-3.357 8.074-1.307 16.387 3.028-.66 6.278-1.152 9.67-1.467 2.017-2.893 4.118-5.56 6.254-7.935-3.95-3.894-7.653-6.382-10.728-7.206-1.593-.425-2.907-.35-3.9.22h0zm22.254 15.628h-.024a97.04 97.04 0 0 0-9.679 0c-.206.005-.374-.094-.465-.263a.5.5 0 0 1 .038-.533 77.71 77.71 0 0 1 4.896-6.018.52.52 0 0 1 .742 0c1.66 1.837 3.308 3.862 4.896 6.018a.5.5 0 0 1 .038.533c-.09.162-.26.263-.442.263zM50 34a98.56 98.56 0 0 1 3.833.077C52.58 32.42 51.295 30.85 50 29.393c-1.295 1.457-2.58 3.027-3.833 4.684A98.56 98.56 0 0 1 50 34z"
                />
              </svg>
            </span>
            React / Redux / GraphQL
          </li>
          <li className="question_description__element">
            <span className="description_element__icon">
              <svg width="48" height="48" viewBox="0 0 48 48">
                <path
                  fill="#388e3c"
                  d="M17.204 19.122l-4.907 2.715c-.184.1-.297.29-.297.492v5.433c0 .203.113.4.297.492l4.908 2.717a.62.62 0 0 0 .593 0l4.907-2.717c.182-.102.295-.29.295-.492V22.33c0-.203-.113-.4-.297-.492l-4.906-2.715c-.092-.05-.195-.076-.297-.076a.61.61 0 0 0-.297.076m25.248 4.89l-.818.452c-.03.017-.05.048-.05.082v.906c0 .034.02.065.05.082l.818.453c.03.017.068.017.1 0l.818-.453c.03-.017.05-.048.05-.082v-.906c0-.034-.02-.065-.05-.082l-.818-.452c-.015-.01-.032-.013-.05-.013s-.034.004-.05.013"
                />
                <path
                  fill="#37474f"
                  d="M35.75 13.364l-2.39-1.333c-.075-.042-.167-.04-.24.003s-.12.123-.12.21v8.052l-2.203-1.22c-.092-.05-.195-.076-.297-.076s-.205.025-.297.076h.001l-4.907 2.715c-.184.1-.297.29-.297.49v5.433c0 .203.113.4.297.492l4.908 2.717a.62.62 0 0 0 .593 0l4.907-2.717c.182-.1.295-.29.295-.492V13.788c0-.176-.096-.338-.25-.424zm-2.885 13.094l-2.23 1.235a.28.28 0 0 1-.269 0l-2.23-1.235c-.085-.046-.136-.132-.136-.224v-2.47c0-.092.05-.177.135-.224l2.23-1.234a.28.28 0 0 1 .135-.034.29.29 0 0 1 .135.034l2.23 1.234c.084.047.135.133.135.225v2.47c0 .09-.05.177-.134.223z"
                />
                <path
                  fill="#2e7d32"
                  d="M17.204 19.122L12 27.762c0 .203.113.4.297.492l4.908 2.717a.62.62 0 0 0 .593 0L23 22.33c0-.203-.113-.4-.297-.492l-4.906-2.715c-.092-.05-.195-.076-.297-.076a.61.61 0 0 0-.297.076"
                />
                <path
                  fill="#4caf50"
                  d="M17.204 19.122l-4.907 2.715c-.184.1-.297.29-.297.492l5.204 8.642a.62.62 0 0 0 .593 0l4.907-2.717c.183-.102.296-.29.296-.492l-5.203-8.64c-.092-.05-.195-.076-.297-.076a.61.61 0 0 0-.297.076"
                />
                <path
                  fill="#37474f"
                  d="M47.703 21.79l-4.906-2.715c-.092-.05-.195-.076-.297-.076s-.205.025-.297.076h.001l-4.907 2.715c-.183.1-.297.293-.297.503v5.41c0 .21.114.402.297.503l4.908 2.717c.184.102.41.102.593 0l2.263-1.253a.3.3 0 0 0-.002-.526l-4.924-2.687c-.083-.047-.135-.134-.135-.228v-2.466c0-.092.05-.177.13-.22l2.234-1.236a.28.28 0 0 1 .135-.034.29.29 0 0 1 .135.034l2.235 1.237c.08.044.13.13.13.22v2.012a.24.24 0 0 0 .121.209c.075.042.167.042.242-.001l2.398-1.393c.148-.086.24-.245.24-.417v-1.88c0-.21-.114-.404-.297-.505zm-37 0l-4.906-2.715C5.705 19.025 5.602 19 5.5 19s-.205.025-.297.076h.001L.297 21.79c-.183.1-.297.293-.297.503v7.465a.24.24 0 0 0 .121.209c.075.042.167.042.242-.001l2.398-1.393A.48.48 0 0 0 3 28.157v-4.393c0-.092.05-.177.13-.22l2.235-1.236a.28.28 0 0 1 .135-.034.29.29 0 0 1 .135.034l2.235 1.237c.08.044.13.13.13.22v4.393a.48.48 0 0 0 .24.417l2.398 1.393c.075.043.167.043.242.001s.12-.124.12-.2v-7.464c0-.2-.114-.403-.297-.504z"
                />
              </svg>
            </span>
            NodeJs / Express / API Rest
          </li>
          <li className="question_description__element">
            <span className="description_element__icon">
              <img src={jest} alt="" className="element_icon" />
            </span>
            Jest
          </li>
          <li className="question_description__element">
            <span className="description_element__icon">
              <svg width="64" height="64" viewBox="0 0 64 64">
                <path
                  fill="#ed7899"
                  d="M38.25,3C55,4,59,5,57,19S35.902,54.35,14,58c0,0-14.972,3-9.986-27L38.25,3z"
                />
                <path
                  fill="#f98cb3"
                  d="M3 31v14l5.922-8.28zm5.922 6.06L14 57l8.312-22.688zM23 34l19 8-6-20zM33 4l7 5 6-6H33zm4 18l3-13 18 6z"
                />
                <path
                  fill="#ed7899"
                  d="M41.638 43.9C42.855 42.53 56.046 27.677 57 21l-1 35-33 1 18.437-12.932c.075-.052.14-.1.2-.178z"
                />
                <path fill="#e0678f" d="M43 43L55.5 55.5 21 58z" />
                <path
                  fill="#ed7899"
                  d="M4.54 28.096l4.347-7.608a3.95 3.95 0 0 1 .645-.844l9.985-9.985c.304-.304.655-.557 1.04-.75l9.38-4.7a4 4 0 0 1 4.008.249l4.067 2.71a4 4 0 0 1 1.576 4.593l-3.15 9.447a4.01 4.01 0 0 1-1.137 1.725L23.06 33.828c-.51.452-1.125.767-1.8.915l-10.003 2.223a4 4 0 0 1-3.991-1.406L4.89 32.58a4 4 0 0 1-.35-4.484z"
                />
                <path
                  d="M38.192 25.812a1 1 0 1 0-1.919.563l.744 2.54a1 1 0 0 0 .959.719 1.02 1.02 0 0 0 .282-.04 1 1 0 0 0 .678-1.241l-.744-2.54zm20.623-13.845L58.65 10.9a11.75 11.75 0 0 0-.93-2.83c-.5-1.04-1.15-1.98-1.96-2.8-2.13-2.13-5.1-3.2-8.86-3.2H33.74c-1.13 0-2.25.28-3.25.8l-1 .47-9.38 4.7c-.48.24-.92.55-1.3.93l-9.98 10a4.83 4.83 0 0 0-.81 1.05l-5 8.82c-.65 1.1-1 2.33-1 3.6l.068 13.503c-.048.832-.05 1.64.012 2.417l.13 1.22a13.19 13.19 0 0 0 .83 2.98l.4.82c.47.9 1.06 1.72 1.78 2.44a10.02 10.02 0 0 0 .83.742c.17.135.35.252.528.376l.375.266c.257.163.528.307.802.448l.174.096c.32.157.653.297.995.425l.054.023c1.45.535 3.098.8 4.93.827h0c.01.001.016.005.025.005.016.002.03.002.046.002.047-.003.072 0 .1 0l1.1-.04a22.26 22.26 0 0 0 1.39-.11l38.9-1.94a1.99 1.99 0 0 0 1.9-1.92l1.5-38.7c.01-.07.08-1.97.08-2.14a16.53 16.53 0 0 0-.155-2.183zM43.67 4.06l-.3.33-3.3 3.543c-.37-.616-.865-1.165-1.5-1.583l-.66-.44-2.02-1.34h-.01l-.76-.5h8.55zM5.18 29.1c.05-.18.13-.35.23-.52l4.35-7.6a2.92 2.92 0 0 1 .48-.63l9.98-9.98c.23-.23.5-.42.78-.57l9.38-4.7c.15-.07.3-.13.46-.18a2.98 2.98 0 0 1 .88-.13 3 3 0 0 1 1.67.5l.36.24 1.93 1.3L37.46 8c1.12.75 1.6 2.17 1.18 3.45L35.5 20.9a3.07 3.07 0 0 1-.85 1.3L22.4 33.08c-.38.34-.84.58-1.34.7l-10 2.22a2.99 2.99 0 0 1-2.99-1.05l-.58-.73-1.33-1.66-.01-.01-.47-.6c-.44-.54-.66-1.2-.66-1.87 0-.33.05-.65.17-.97zm5.087 27.362l-.252-.075-.514-.2-.352-.144-.425-.202a8.7 8.7 0 0 1-.393-.213 8.58 8.58 0 0 1-.347-.207l-.44-.306-.255-.187a7.83 7.83 0 0 1-.64-.567C4.57 52.3 3.73 49.2 4 45.55l3.53-5.3c.3-.46.2-1.08-.27-1.38a1 1 0 0 0-1.39.27l-.92 1.37v.02l-.92 1.37v-8.8c.02.04.05.07.08.1l1.07 1.33 1.3 1.65c.01.02.03.04.04.05a5.02 5.02 0 0 0 1.46 1.209c-.003.1 4.72 19.494 4.72 19.494a12.13 12.13 0 0 1-2.442-.461zm5.983.398l-.16.01-.244.023-.187.015c-.08.008-.156.012-.235.02l4.04-11.74a1 1 0 1 0-1.892-.65l-3.4 9.9-4.02-16.4c.08.004.157.013.237.013a5.08 5.08 0 0 0 1.1-.12l10-2.22a5.29 5.29 0 0 0 .64-.192l19.355 7.186c.048.018.1.016.148.027C33.417 50.776 23.95 56.03 16.25 56.87zM55.4 54.9l-30.12 1.5c6.12-2.6 12.56-7.03 18.32-12.8 6.02-6.02 10.45-12.65 12.96-18.82L55.4 54.9zm1.47-38.14c-.984 7.3-6.025 16.545-14.067 24.797-.005-.024-.004-.048-.01-.072l-2.55-8.7c-.156-.53-.712-.837-1.24-.678a1 1 0 0 0-.678 1.241l1.988 6.778-16.12-5.985L35.97 23.7c.182-.162.348-.34.503-.526l20.4-6.74c.004.027 0 .06.005.085l-.01.26zm-19.186 3.888L40.54 12.1c.23-.686.284-1.393.213-2.082l5.407 1.912a.96.96 0 0 0 .33.06 1.02 1.02 0 0 0 .95-.67c.18-.52-.1-1.1-.6-1.27l-4.5-1.6 4.07-4.37c.17-.01.34-.01.5-.01 3.2 0 5.7.88 7.45 2.62a7.43 7.43 0 0 1 .64.73c1.33 1.718 2 4.065 1.97 6.88l-19.275 6.367zm15.466-8.374l-2.447-.867a1 1 0 1 0-.668 1.886l2.447.867a1 1 0 1 0 .668-1.886zm-1.6 42.2c.256 0 .512-.098.707-.293l1.415-1.415a1 1 0 0 0-1.414-1.414l-1.415 1.415a1 1 0 0 0 0 1.414c.195.195.45.293.707.293zm-3.536-3.536c.256 0 .512-.098.707-.293l1.415-1.415a1 1 0 0 0-1.414-1.414l-1.415 1.415a1 1 0 0 0 0 1.414.99.99 0 0 0 .707.293zM43.782 47.1c.195.195.45.293.707.293s.512-.098.707-.293l1.414-1.414a1 1 0 0 0-1.414-1.414l-1.414 1.414a1 1 0 0 0 0 1.414z"
                  fill="#8d6c9f"
                />
              </svg>
            </span>
            Ruby / ROR
          </li>
          <li className="question_description__element">
            <span className="description_element__icon">
              <svg width="48" height="48" viewBox="0 0 48 48">
                <path
                  fill="#0277bd"
                  d="M24.047 5c-1.555.005-2.633.142-3.936.367-3.848.67-4.55 2.077-4.55 4.67V14h9v2H10.87c-2.636 0-4.943 1.242-5.674 4.22-.826 3.417-.863 5.557 0 9.125C5.85 32.005 7.294 34 9.93 34h3.632v-5.104c0-2.966 2.686-5.896 5.764-5.896h7.236c2.523 0 5-1.862 5-4.377v-8.586c0-2.44-1.76-4.263-4.218-4.672A17.02 17.02 0 0 0 24.047 5zm-4.984 4a1.51 1.51 0 0 1 1.5 1.502 1.5 1.5 0 0 1-1.5 1.498 1.49 1.49 0 0 1-1.5-1.498A1.5 1.5 0 0 1 19.063 9z"
                />
                <path
                  fill="#ffc107"
                  d="M23.078 43c1.555-.005 2.633-.142 3.936-.367 3.848-.67 4.55-2.077 4.55-4.67V34h-9v-2h13.693c2.636 0 4.943-1.242 5.674-4.22.826-3.417.863-5.557 0-9.125-.656-2.66-2.1-4.656-4.736-4.656h-3.632v5.104c0 2.966-2.686 5.896-5.764 5.896h-7.236c-2.523 0-5 1.862-5 4.377v8.586c0 2.44 1.76 4.263 4.218 4.672a17.02 17.02 0 0 0 3.298.365zm4.985-4a1.51 1.51 0 0 1-1.5-1.502 1.5 1.5 0 0 1 1.5-1.498 1.49 1.49 0 0 1 1.5 1.498 1.5 1.5 0 0 1-1.5 1.502z"
                />
              </svg>
            </span>
            Python
          </li>
          <li className="question_description__element">
            <span className="description_element__icon">
              <svg width="64" height="64" viewBox="0 0 64 64">
                <g fill="#ace3ff">
                  <path d="M7 17L32 3l26 14-26 14z" />
                  <path d="M6 17v30l26 15V31z" />
                </g>
                <path fill="#7bbeeb" d="M17 23l15-8 15 8-15 8z" />
                <path fill="#ace3ff" d="M32 62l27-15V17L32 31z" />
                <g fill="#7bbeeb">
                  <path d="M17 23v18l15 8V31z" />
                  <path d="M32 49l15-8V23l-15 8z" />
                </g>
                <path fill="#e3f2ff" d="M17 41L6 47V17l11 6z" />
                <g fill="#8d6c9f">
                  <path d="M32 32c-.162 0-.324-.04-.47-.117l-15-8C16.204 23.71 16 23.37 16 23s.204-.71.53-.883l15-8c.294-.156.647-.156.94 0l15 8A1 1 0 0 1 48 23c0 .37-.204.71-.53.883l-15 8c-.147.078-.31.117-.47.117zm-12.875-9L32 29.866 44.875 23 32 16.134 19.125 23z" />
                  <path d="M17 27a1 1 0 0 1-1-1v-2.406L5.52 17.878a1 1 0 0 1-.52-.881c.001-.366.203-.703.526-.878l26-14a1 1 0 0 1 .948 1.761L8.1 17.006l9.38 5.116A1 1 0 0 1 18 23v3a1 1 0 0 1-1 1zm0 8a1 1 0 0 1-1-1v-4a1 1 0 1 1 2 0v4a1 1 0 0 1-1 1zm15 15a1.01 1.01 0 0 1-.471-.117l-15-8A1 1 0 0 1 16 41v-3a1 1 0 1 1 2 0v2.4l13 6.933V31a1 1 0 1 1 2 0v18c0 .352-.184.677-.485.857-.16.095-.337.143-.515.143z" />
                </g>
                <path fill="#85cbf8" d="M59 47L32 61V49l15-8z" />
                <g fill="#8d6c9f">
                  <path d="M32 63a1 1 0 0 1-1-1V49a1 1 0 1 1 2 0v11.3l25.514-14.175a1 1 0 1 1 .972 1.748l-27 15c-.152.084-.32.126-.486.126zm15-21a1 1 0 0 1-1-1V23a1 1 0 0 1 .553-.895l10.244-5.122L33 4.645V15a1 1 0 1 1-2 0V3a1 1 0 0 1 1.46-.887l27 14a1 1 0 0 1-.013 1.783L48 23.618V41a1 1 0 0 1-1 1zm-2.86 2.66a1 1 0 0 1-.883-.529l-.94-1.765a1 1 0 0 1 1.764-.942l.94 1.765a1 1 0 0 1-.881 1.471zm-4.168 2.223a1 1 0 0 1-.884-.53l-.94-1.766a1 1 0 1 1 1.766-.942l.94 1.766a1 1 0 0 1-.412 1.354 1.01 1.01 0 0 1-.47.117z" />
                  <path d="M35.805 49.104a1 1 0 0 1-.883-.529L33.98 46.8a1 1 0 1 1 1.765-.942l.94 1.765a1 1 0 0 1-.881 1.471zM59 48c-.153 0-.306-.035-.447-.105l-12-6a1 1 0 0 1-.447-1.342c.247-.493.847-.692 1.342-.447L58 45.382V17a1 1 0 1 1 2 0v30a1 1 0 0 1-.474.85A.99.99 0 0 1 59 48zM6 48c-.177 0-.354-.047-.5-.14A1 1 0 0 1 5 47V17a1 1 0 1 1 2 0v28.315l9.52-5.193a1 1 0 0 1 1.357.399 1 1 0 0 1-.399 1.356l-11 6C6.33 47.96 6.165 48 6 48z" />
                  <path d="M32 63c-.17 0-.34-.043-.5-.134l-26-15a1 1 0 1 1 1-1.732l26 15a1 1 0 0 1 .367 1.366c-.186.32-.522.5-.868.5z" />
                </g>
              </svg>
            </span>
            Webpack / Gulp
          </li>
          <li className="question_description__element">
            <span className="description_element__icon">
              <svg viewBox="0 0 48 48" width="96" height="96">
                <path
                  fill="#fff"
                  d="M44.083 29.8c-.183-.83-.935-1.796-2.452-1.796-.3 0-.65.04-1.035.12-.708.146-1.31.217-1.842.24 4.133-7.04 6.816-16.82 4.16-20.214C39.412 3.667 34.7 3 32.202 3h-.235c-.93.015-1.893.13-2.863.34l-3.583.774c-.488-.06-.985-.104-1.503-.113h-.046-.152c-1.593 0-3.046.338-4.34.973l-1.25-.493c-1.72-.678-4.308-1.485-6.868-1.485a12.39 12.39 0 0 0-.431.008C8.407 3.093 6.24 4.05 4.664 5.77 2.696 7.915 1.8 11.054 2.003 15.1 2.013 15.31 4.46 36 11.4 36h.025.064c.9-.022 1.76-.384 2.563-1.077.613.46 1.406.732 2.145.84.488.115 1.366.278 2.418.278 1.284 0 2.442-.263 3.44-.738l-.016 3.418-.001.075.005.075c.097 1.42.342 2.698.71 3.7 1.05 2.86 2.866 4.434 5.11 4.434a4.56 4.56 0 0 0 .284-.009c1.846-.114 3.717-1.15 5.004-2.772 1.393-1.755 1.715-3.607 1.84-5.026L35 39.11v-4.167l.103.01.436.038.042.004.042.002a7.93 7.93 0 0 0 .381.008c1.507 0 3.362-.39 4.616-.974 1.2-.556 3.94-2.084 3.463-4.242z"
                />
                <path
                  d="M33 34l.018-.565L33 33l.032-.022c.15-2.673.886-3.703 1.675-4.3l-.356-.475-1.192-1.674-.082-.158c-.067-.164-.23-.447-.435-.82-1.183-2.14-3.645-6.592-1.96-9.404.738-1.232 2.122-1.942 4.12-2.117-.817-2.323-3.878-7.926-10.818-8.04-6.047-.098-8.032 5.392-8.678 8.672.9-.377 1.906-.606 2.836-.606h.043c2.3.017 3.865 1.24 4.323 3.354.335 1.552.496 2.9.492 4.153-.01 2.72-.558 4.15-1.042 5.4l-.154.408a20.38 20.38 0 0 1-.38.937 12.31 12.31 0 0 0-.318.802c.484.1.864.265 1.125.38l.15.066a.98.98 0 0 1 .137.07c.848.516 1.376 1.3 1.5 2.233.06.498.05 3.893.03 6.855.087 1.285.305 2.364.593 3.146.4 1.114 1.43 3.24 3.394 3.12 1.37-.085 2.687-.92 3.56-2.02.938-1.18 1.284-2.487 1.414-3.958V34zm-17.886-5.083C13.5 27.234 12.715 24.97 13 22.86c.285-2.035.124-4.027.037-5.098l-.047-.77c0-.008.002-.015.003-.023.12-3.032 1.284-7.798 4.5-10.63C15.932 5.724 13.388 4.913 11 5c-3.742.136-7.364 2.724-7 10 .137 2.73 3.222 19.103 7.44 19 .603-.015 1.23-.402 1.872-1.176 1.017-1.223 2.005-2.332 2.708-3.104a7.62 7.62 0 0 1-.906-.803zm21.9-14.186a1.37 1.37 0 0 1-.022.408c.03.92-.068 1.813-.17 2.677-.074.636-.15 1.293-.17 1.952-.02.645.07 1.282.166 1.956.225 1.578.46 3.36-.765 5.437a9.11 9.11 0 0 1 .581.837c4.6-7.475 6.468-16.36 4.695-18.626C38.655 5.944 34.94 4.952 32 5c-.92.015-1.758.14-2.473.294 5.076 2.46 7.337 7.732 7.497 9.437zM41 30.07c-2.665.55-3.947.257-4.57-.126-.1.072-.2.133-.293.2-.372.225-.96.583-1.105 2.782.083.016.156.025.246.044l.435.04c1.32.06 3.05-.3 4.063-.78 2.185-1.014 3.376-2.592 1.223-2.148zm-18.977 2.05c-.037-.298-.198-.54-.492-.732l-.108-.047c-.36-.16-.77-.34-1.423-.34h-.004c-.127.01-.253.02-.38.02-.052 0-.103-.007-.155-.01-.474.365-1.148.647-2.816 1-2.98.76-1.22 1.655-.078 1.794 1.106.277 3.735.614 5.48-.8-.005-.448-.013-.756-.025-.866zM20.68 18.5c-.292.302-.753.566-1.262.484-.828-.134-1.463-1.133-1.417-1.508h0c.044-.374.75-.57 1.578-.435a3.07 3.07 0 0 1 .768.228c-.32-.688-.9-1.085-1.782-1.182-1.565-.174-3.226.644-3.56 1.097l.033.417c.093 1.147.265 3.284-.05 5.537-.208 1.485.393 3.17 1.567 4.395.757.8 1.64 1.3 2.513 1.438.1-.478.3-.944.513-1.425l.346-.852.162-.427a11.5 11.5 0 0 0 .91-4.703c.004-.905-.107-1.938-.318-3.064zm14.166 3.506c-.104-.73-.2-1.484-.185-2.303.023-.742.105-1.442.184-2.12l.138-1.55c-1.3.107-2.145.48-2.55 1.108a3.01 3.01 0 0 1 .568-.13c.892-.116 1.543.14 1.618.637.055.363-.253.705-.388.836a1.75 1.75 0 0 1-.981.488 1.56 1.56 0 0 1-.192.012 1.67 1.67 0 0 1-.95-.3c.112 1.973 1.567 4.612 2.283 5.907l.37.688c.393-1.12.248-2.14.086-3.275z"
                  fill="#0277bd"
                />
              </svg>
            </span>
            PostgresQL / SQL / MongoDB
          </li>
        </ul>
      </div>
    </div>
  )
}

export default ContentAboutMe
