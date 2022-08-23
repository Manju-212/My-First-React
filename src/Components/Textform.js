import React, { useState } from 'react'
export default function Textform(props) {
    const handlecaseup = () => {
        let Uptext = text.toUpperCase();
        setText(Uptext);
        props.alertshow("Upper case conversion is done","success");
    }
    const handlecaselow = () => {
        let Uptext = text.toLowerCase();
        setText(Uptext);
        props.alertshow("Lower case conversion  is done","success");
    }
    const handlecaseremovespace = () => {
        let newtext = text.split(" ").join("")
        setText(newtext);
        props.alertshow("Remove space case is done","success");
    }
    const handlecaseClear = () => {
        let cleartext = "";
        setText(cleartext);
        props.alertshow("Clear case is done","success");
    }
    const handleonChange = (event) => {
        setText(event.target.value);
    }

    const [text, setText] = useState("");
    return (
        <>
            <div className="container my-3">
                <h3 style={
                    {
                        backgroundColor: props.Mode === 'dark' ? '#191970' : 'white',
                        color: props.Mode === 'dark' ? 'white' : 'black'
                    }}>{props.heading}</h3>
                <textarea className="form-control" id="mybox" value={text} onChange={handleonChange} style={
                    {
                        backgroundColor: props.Mode === 'dark' ? '#084298' : 'white',
                        color: props.Mode === 'dark' ? 'white' : 'black'
                    }
                } rows="10" cols="50"></textarea>
                <button disabled ={text.length===0} type="button" className="btn btn-primary my-3" onClick={handlecaseup}>Convert to Uppercase</button>
                <button disabled ={text.length===0} type="button" className="btn btn-primary my-3 mx-2" onClick={handlecaselow}>Convert to Lowercase</button>
                <button disabled ={text.length===0} type="button" className="btn btn-primary my-3 " onClick={handlecaseClear}>Cleartext</button>
                <button disabled ={text.length===0} type="button" className="btn btn-primary my-3 mx-2" onClick={handlecaseremovespace}>Removespaces</button>
            </div>
            <div className="container my-2" style={
                    {
                        backgroundColor: props.Mode === 'dark' ? '#191970' : 'white',
                        color: props.Mode === 'dark' ? 'white' : 'black'
                    }}>
                <h2>No of words and characters</h2>
                <p>{text.split(" ").filter((element)=>{
                    return element.length!==0
                }).length} words and {text.length} characters</p>
                <h3>Preview</h3>
                <p>{text.length===0?"Enter something to perform some action":text}</p>
            </div>
        </>

    )
}
