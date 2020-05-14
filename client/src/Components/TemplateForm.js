import React, { useState } from "react";
import axios from 'axios'
function Option(props) {
    return (
        <option key={props.val} value={props.val}>
            {" "}
            {props.val}{" "}
        </option>
    );
}
function DropDown(props) {
    if (props.items !== undefined) {
        return (
            <select onChange={props.onChange} required={props.required}>
                <option key={Math.random()} value="">
                    {props.value}
                </option>
                {props.items.map(item => {
                    return <Option key={item} val={item} />;
                })}
            </select>
        );
    } else {
        return (
            <select onChange={props.onChange}>
                <option value="">select</option>
            </select>
        );
    }
}
export default function TeplateForm(props) {
    const tempitems = ["Natural One", "Techno 01", "Sporty"];
    const versions = {
        "Natural One": ["1.1.0", "4.1.0", "1.9.0"],
        Sporty: ["2.0.0", "3.0.4","2.3.1"],
        "Techno 01": ["3.0.5", "3.0.6", "3.2.1", "3.8.6"]
    };
    const [temlateValue, SettemlateValue] = useState("select");
    const [versionValue, SetversionValue] = useState("");
    const [versionItemValue, SetversionItemValue] = useState(
        versions["" + temlateValue.toString()]
    );
    const [url, setUrl] = useState("");

    const tempchangeHandler = e => {
        console.log("inside tempchangeHandler = " + e.target.value);
        if (e.target.value) SettemlateValue(e.target.value);
        if (e.target.value) SetversionItemValue(versions["" + e.target.value]);
        if (e.target.value) SetversionValue(versions["" + e.target.value][0]); //versions["" + e.target.value][0]);
    };
    const varsonChangeHandler = e => {
        console.log("inside varsonChangeHandler = " + e.target.value);
        if (e.target.value !== "") SetversionValue(e.target.value);
        else SetversionValue("");
    };
    const urlHandler = e => {
        setUrl(e.target.value);
    };
    const handleSubmit = event => {
        
        axios.post('http://localhost:5000/', {
            url: url,
            templateName: temlateValue,
            versionNo:versionValue
          }).then(res=>{
              if(res.status===200);
          })
        event.preventDefault();
        props.update()
    };

    const handlReset = e => {
        console.log("handlReset");
        SettemlateValue("select");
        SetversionValue("");
    };

    return (
        <div className="App">
            <h2>DeployMent Form</h2>
            <form onSubmit={handleSubmit} className="border border-primary App">
                <div className="form-group">
                    <label htmlFor="template">
                        <strong >Select Template : </strong>
                        <DropDown
                            items={tempitems}
                            value={temlateValue}
                            onChange={tempchangeHandler}
                            required={true}
                        />
                    </label>
                </div>
                <div className="form-group">
                    <label htmlFor="version">
                        <strong>Select version : </strong>
                        <DropDown
                            className="form-control"
                            items={versionItemValue}
                            value={versionValue}
                            onChange={varsonChangeHandler}
                            required={false}
                        />
                    </label>
                </div>
                <div className="form-group">
                    <label htmlFor="url">
                        <strong>URl </strong>
                        <input
                            type="text"
                            className="form-control"
                            name="url"
                            value={url}
                            onChange={urlHandler}
                            placeholder="url"
                        />
                    </label>
                
              
                
                    <div className=" form-group App">
                        <button type="submit" className="btn btn-primary App">
                            Add Deploy
                        </button>
                        <div className="form-group App" />
                        <button
                            type="reset"
                            className="btn btn-primary form-group App"
                            onClick={handlReset}
                        >
                            Reset
                    </button>
                    </div>
                </div>
            </form>
        </div>
    );
}
