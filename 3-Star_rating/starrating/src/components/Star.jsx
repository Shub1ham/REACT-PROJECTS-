import { useState } from "react";
import { FaStar } from "react-icons/fa";

function Star({ noofstar }) {
  const [rating, setrating] = useState(0);
  const [hover, sethover] = useState(0);

  let handleonclick = (getindex) => {
    setrating(getindex);
  };

  let handlemove=(getindex)=>{
    sethover(getindex)
  }

  let handleleave=(getindex)=>{
    sethover(rating)
  }

  return (
    <div className="starrating">
      {[...Array(noofstar)].map((e, index) => {
        index += 1;
        return (
          <FaStar
            className={index <= (hover || rating) ? 'active':'inactive'}
            style={{ fontSize: "50px" }}
            key={index}
            onClick={() => handleonclick(index)}
            onMouseMove={() => handlemove(index)}
            onMouseLeave={() => handleleave(index)}
          ></FaStar>
        );
      })}
    </div>
  );
}
export default Star;
