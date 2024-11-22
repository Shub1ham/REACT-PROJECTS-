import { useEffect } from "react";
import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import "./image.css";
function Image({ url, limit = 5 }) {
  const [image, setimage] = useState([]);
  const [slide, setslide] = useState(0);
  const [error, seterror] = useState(null);
  const [loading, setloading] = useState(false);

  async function fetchimage(geturl) {
    try {
      setloading(true);
      const response = await fetch(`${geturl}${limit}`);
      const data = await response.json();

      if (data) {
        setimage(data);
        setloading(false);
      }
    } catch (e) {
      seterror(e.message);
      setloading(false);
    }
  }

  const handlepre = () => {
    setslide(slide === 0 ? image.length - 1 : slide - 1);
  };

  const handlenext = () => {
    setslide(slide === image.length - 1 ? 0 : slide + 1);
  };

  useEffect(() => {
    if (url !== "") {
      fetchimage(url);
    }
  }, [url]);
  console.log(image);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error !== null) {
    return <div>Error: {error}</div>;
  }
  return (
    <div className="container">
      <FaArrowLeft className="arrow arrow-left" onClick={handlepre} />
      {image && image.length
        ? image.map((item,index) => (
            <img
              key={item.id}
              alt={item.download_url}
              src={item.download_url}
              className={slide === index ? "current-img" : "current-img hide-img"}
            ></img>
          ))
        : null}
      <FaArrowRight className="arrow arrow-right" onClick={handlenext} />
      <span className="circle-indicators">
        {image && image.length
          ? image.map((event, index) => (
              <button key={index} className={slide===index ? "current-indicator" :"hide-current-indicator"}
              onClick={()=>setslide(index)}
              ></button>
            ))
          : null}
      </span>
    </div>
  );
}
export default Image;
