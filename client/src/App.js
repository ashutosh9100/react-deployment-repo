import React, { useState ,useEffect} from "react";
import "./App.css";
import TeplateForm from "./Components/TemplateForm";
import TemplateList from "./Components/TemplateList";
import BrowserRouter from 'react-router-dom'

export default function App(props) {

    const [data, setData] = useState(props.data);
    const [pro, setPro] = useState(false);
  
      const update=()=>{
          console.log('isup')
        setPro(true);
      }

    
    return (
        <BrowserRouter>
        <div className="App" >
            <TeplateForm update={update}/>
            <TemplateList data={data} pro={pro}/>
        </div>
        </BrowserRouter>
       
    );
}
