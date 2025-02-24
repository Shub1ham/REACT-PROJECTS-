import "./Testimonials.css";
import user1 from "../assets/user-1.png";
import user2 from "../assets/user-2.png";
import user3 from "../assets/user-3.png";
import nexticon from "../assets/next-icon.png";
import previcon from "../assets/back-icon.png";
import { useRef } from "react";
const Testimonials = () => {
  const slider = useRef();
  let tx = 0;

  const slideforword = () => {
    if (tx > -35) {
      tx = -35;
    }
    slider.current.style.transform = `translatex(${tx}%)`;
  };

  const slidebackword = () => {
    if (tx < 0) {
      tx = +0;
    }
    slider.current.style.transform = `translatex(${tx}%)`;
  };

  return (
    <div className="testimonials">
      <img src={nexticon} className="next-icon" alt="" onClick={slideforword} />
      <img
        src={previcon}
        className="back-icon"
        alt=""
        onClick={slidebackword}
      />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user1} alt="" />
                <div>
                  <h3>Emily Williams</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at Edusity was one of the best
                decisions I've ever made. The supportive community,
                state-of-the-art facilities, and commitment to academic
                excellence have truly exceeded my expectations.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user2} alt="" />
                <div>
                  <h3>William Jackson</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at Edusity was one of the best
                decisions I've ever made. The supportive community,
                state-of-the-art facilities, and commitment to academic
                excellence have truly exceeded my expectations.
              </p>
            </div>
          </li>{" "}
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user3} alt="" />
                <div>
                  <h3>Emily Williams</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at Edusity was one of the best
                decisions I've ever made. The supportive community,
                state-of-the-art facilities, and commitment to academic
                excellence have truly exceeded my expectations.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
