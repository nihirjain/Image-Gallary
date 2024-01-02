import { useParams } from "react-router-dom"
import axios from "axios"
import { useEffect, useState } from "react";
import './Details.css'
function Details(){
    let {id} = useParams();
    let [obj , setobj] = useState({});
    async function Apidata(){
        let response = await axios.get(`https://api.slingacademy.com/v1/sample-data/photos/${id}`);
        let data = response.data.photo;
        setobj({
            title:data.title,
            name:data.description,
            src:data.url
        })
    }

    useEffect(()=>{Apidata()},[]);

    return(
        <>
        <div className="Details">
            <div className="image"><img src={obj.src} alt={name} /></div>
           <div className="head">
            <div>{obj.title}</div> 
            <div>{obj.name}</div>
           </div>
        </div>
        </>
    )
}

export default Details