import "./list.css";
import Card from "../card/card";

import axios from "axios";
import { useEffect, useState } from "react";
function List(){
    let [arr , usearr] = useState([]);
    let [bollean , setbollean] = useState(true);

    async function Apicall(){
        let response = await axios.get("https://api.slingacademy.com/v1/sample-data/photos?offset=5&limit=20");
        let data = response.data.photos;
        let integration = data.map((e)=>{
            return {
                title:e.title,
                url:e.url,
                id:e.id
            }
        });
        usearr(integration);
        setbollean(false);
    }
    useEffect(()=>{Apicall()} , []);

    
    
    return(
        <>
        <div className="List">
            {(bollean)?"...Loading":arr.map((e)=>{
                return <Card source={e.url} Describe={e.title} id={e.id}/>
            })}
        </div>
        </>
    )
}

export default List;