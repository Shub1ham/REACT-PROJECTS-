import {QRCodeCanvas} from "qrcode.react"
import { useState } from "react";
function Qr(){
    const [qrcode,setqrcode]=useState('')
    const [input,setinput]=useState('')

    const handleonchange=(event)=>{
        console.log(event.target.value)
        setinput(event.target.input)
    }
     
    const handleonclick=()=>{
        setqrcode(input)
    }
    return <div className="container">
        <h1>QR Code Generator</h1>
        <div className="display">
            <input type="text" name="qr-code" placeholder="Enter Your Value" value={input}
            onChange={handleonchange}
            ></input>
            <button
            disabled={input !== "" ? false : true}
            onClick={handleonclick}
            >QR Generate</button>
        </div>
        <div className="qr">
            <QRCodeCanvas
            value={qrcode}
            size={400}
            >

            </QRCodeCanvas>
            
        </div>
        
    </div>
}

export default Qr;