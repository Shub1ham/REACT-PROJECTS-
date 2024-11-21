import { useState } from "react";
import data from "./data";
import "./style.css";

function Accordion() {
  const [selected, setselected] = useState(null);
  const [enablemultiselection, setenablemultiselection] = useState(false);
  const [multiple, setmultiple] = useState([]);
  const handlesingleselection = (getid) => {
    setselected(getid === selected ? null : getid);
  };

  const handlemultiselection = (getid) => {
    let copymultiple = [...multiple];
    let findindexofcurrentid = copymultiple.indexOf(getid);
    if (findindexofcurrentid === -1) {
      copymultiple.push(getid);
    } else {
      copymultiple.splice(findindexofcurrentid, 1);
    }
    setmultiple(copymultiple);
  };
  return (
    <div className="wrapper">
      <button
        onClick={() => {
          setenablemultiselection(!enablemultiselection);
        }}
      >
        Enable Multi Selection
      </button>
      <div className="accordion">
        {data && data.length > 0 ? (
          data.map((item) => (
            <div className="item">
              <div
                className="title"
                onClick={
                  enablemultiselection
                    ? () => handlemultiselection(item.id)
                    : () => handlesingleselection(item.id)
                }
              >
                <h3>{item.question}</h3>
                <span>+</span>
              </div>
              {enablemultiselection
                ? multiple.indexOf(item.id) !== -1 && <div>{item.answer}</div>
                : selected === item.id && <div>{item.answer}</div>}
              {/* {selected === item.id || multiple.indexOf(item.id) !== -1 ? <div>{item.answer}</div> : null} */}
            </div>
          ))
        ) : (
          <div>No Data Found</div>
        )}
      </div>
    </div>
  );
}
export default Accordion;
