import React, { useState,useEffect } from "react";
import axios from 'axios';

export default function TemplateList(props) {
    const [data, setData] = useState([]);
    
  
  // for first time render
    useEffect(() => {
      axios.get(
        'http://localhost:5000/'
      ).then(res=>setData(res.data))
    },props.pro);
    
    //for auto reload 
    if(props.pro){
      axios.get(
        'http://localhost:5000/'
      ).then(res=>setData(res.data))
    }
   
    
   
    function ListItem(props){
      const item=props.item;
      
      
   
      return(
      <li className="list-group-item d-flex justify-content-between align-items-center">
      <span className="col-3">{item.url}</span>
      <span className="col-3">{item.templateName}</span>
      <span className="col-3">{item.versionNo}</span>
      <span className="badge badge-primary badge-pill"><button  onClick={(e)=>
      {
        console.log(e)
        axios.delete(
            `http://localhost:5000/${item._id}`
          ).then(props.deleted);
        }
        }  className="btn" 
      >Delete</button></span>
    </li>)
    
    }
    const deleted=()=>{
      const newData=axios.get(
        'http://localhost:5000/'
      ).then(res=>setData(res.data))

    }
    return (
        <div> <h2>TemplateList</h2>
        <ul className="list-group">
            {
                data.map(item => (
                  <ListItem key={item._id} item={item} deleted={deleted}>
                  </ListItem>
                ))
            }
        </ul>
        </div>);
}
