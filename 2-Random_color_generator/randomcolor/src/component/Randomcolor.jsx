import { useEffect, useState } from "react";

function Randomcolor() {
  const [typeofcolor, settypeofcolor] = useState();
  const [color, setcolor] = useState("#000000");

  const handlehexonclick = () => {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexcolor = "#";
    for (let i = 0; i < 6; i++) {
      hexcolor += hex[Math.floor(Math.random() * 16)];
    }
    setcolor(hexcolor);
  };

  const handelrgbonclick = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    setcolor(`rgb (${r},${g},${b})`);
  };

  useEffect(()=>{
    typeofcolor==='hex'?handlehexonclick:handelrgbonclick
  })

  return (
    <div
      className="container"
      style={{ backgroundColor: color, height: "100vh", width: "100vw" }}
    >
      <button onClick={()=>settypeofcolor('hex')}>Create Hex Color</button>
      <button onClick={()=>settypeofcolor('rgb')}>Create RGB color</button>
      <button onClick={typeofcolor==='hex'?handlehexonclick:handelrgbonclick}>Generate Random Color</button>
      <div className="info">
        <h1>{typeofcolor==='hex'?'HEX color':'RGB color'}</h1>
        <h1>{color}</h1>
      </div>
    </div>
  );
}
export default Randomcolor;
