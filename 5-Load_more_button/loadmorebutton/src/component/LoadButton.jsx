import { useEffect } from "react"
import { useState } from "react"

function Loadbutton(){
    const [loading,setloading]=useState(false)
    const [products,setproducts]=useState([])
    const [count,setcount]=useState(0)
    const [disablebutton,setdisablebutton]=useState(false)
    

    async function fetchproduct() {
        setloading(true)
        try{
            const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${count===0 ? 0:count*20}`);
            const data=await response.json()
            console.log(data)
            
            if(data && data.products && data.products.length){
                setproducts((predata)=>[...predata,...data.products])
                setloading(false)
            }

        }catch(e){
            console.log(e)
            setloading(false)
        }
    }


    useEffect(()=>{
        fetchproduct()
    },[count])

    useEffect(()=>{
        if(products && products.length === 100){
            setdisablebutton(true)
        }
    },[products])

    if(loading){
        return <div>Loading... Data ! Please Wait.</div>;
    }

    const handleonclick=()=>{
        setcount(count+1)
    }

   return (
   <div className="container">
        <div className="product-container">
            {
                products && products.length ?
                products.map((item)=>(<div className="product" key={item.id}>
                   <img src={item.thumbnail} alt={item.title}/>
                   <p>{item.title}</p>
                </div>)):null
            }
        </div>
        <div className="button-container">
            <button
            disabled={disablebutton}
            onClick={handleonclick}
            >Load More Products</button>  
            {
                disablebutton?<p>No More Products</p>:null
            }
        </div>
   </div>
   )
}
export default Loadbutton