import { useState } from "react"
import Menu_list from "./menu-list"

function Menu_item({item}){

    const [displaychildren , setdisplaychildren]=useState({})

    const handleonclick=(getcurrentlable)=>{
        setdisplaychildren({
            ...displaychildren ,
            [getcurrentlable]:!displaychildren[getcurrentlable] 
        })

    }

    return <li>
        <div style={{display:'flex', gap:'20px', alignItems:'center'}}>
        <p>{item.lable}</p>
         {
            item && item.children && item.children.length ? <span
            onClick={()=>handleonclick(item.lable)}
            >{
                displaychildren[item.lable] ? '-' : '+'
            }</span> : null
         }
        </div>
        {
            item && item.children && item.children.length>0 && displaychildren[item.lable]?
            <Menu_list list={item.children}></Menu_list>
            :null
        }
    </li>

}
export default Menu_item