import { useContext } from "react";
import { assets } from "../assets/assets";
import { Context } from "../context/Context";
import "./main.css";
function Main() {
  const { onsent, input, setinput, resentprompt, showresult, loading, result } =
    useContext(Context);
  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className="main-container">
        {!showresult ? 
          <>
            <div className="greet">
              <p>
                <span>Hello, Shubham</span>
              </p>
              <p>How can i help you today</p>
            </div>
            <div className="cards">
              <div className="card">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Temporibus, dicta!
                </p>
                <img src={assets.compass_icon} alt="" />
              </div>
              <div className="card">
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Recusandae, laboriosam.
                </p>
                <img src={assets.bulb_icon} alt="" />
              </div>
              <div className="card">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Temporibus, dicta!
                </p>
                <img src={assets.message_icon} alt="" />
              </div>
              <div className="card">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Temporibus, dicta!
                </p>
                <img src={assets.code_icon} alt="" />
              </div>
            </div>
          </>
         : 
          <div className="result">
            <div className="result-title">
              <img src={assets.user_icon} alt="" />
              <p>{resentprompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="" />
              {loading ? 
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>:<p dangerouslySetInnerHTML={{__html:result}}></p>}
              
            </div>
          </div>
        }

        <div className="main-bottom">
          <div className="search-box">
            <input
              type="text"
              name=""
              id=""
              placeholder="enter here"
              onChange={(e) => setinput(e.target.value)}
              value={input}
            />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              <img src={assets.send_icon} alt="" onClick={() => onsent()} />
            </div>
          </div>
          <p className="bottom-info">gemini may display inaccurate info</p>
        </div>
      </div>
    </div>
  );
}

export default Main;
