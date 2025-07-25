import React, { useState } from 'react'

export default function TextForm(props) {


const handleUpClick = () => {
    //console.log("Uppercase was clicked:" + text);
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("Converted to Uppercase!", "success")
} 

const handleLoClick = () => {
    //console.log("Uppercase was clicked:" + text);
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to Lowercase!", "success")
} 

const handleClearClick = () => {
    let newText = '';
    setText(newText)
    props.showAlert("Text Cleared!", "success")
} 

const handleCopyClick = () => {
      var text = document.getElementById("myBox")
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("Copied to clipboard!", "success")
}

const handleExtraSpaces = () => {
  let newText = text.split(/[ ]+/);
  setText(newText.join(" "))
  props.showAlert("Extra spaces removed!", "success")
}

const handleOnChange = (event) => {
    //console.log("On Change");
    setText(event.target.value)

} 

const [text, setText] = useState('');

  return (
    <>
    <div className="container" style = {{color: props.mode==='dark'?'white':'#042743'}}>
       <h3>{props.heading}</h3>
       <div className="mb-3">
       <textarea className="form-control" value={text} onChange={handleOnChange} style = {{backgroundColor: props.mode==='dark'?'gray':'white' , color: props.mode==='dark'?'white':'#042743'}} id = "myBox" rows="8"></textarea>
       </div>
       <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
       <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
       <button className="btn btn-primary mx-1" onClick={handleCopyClick}>Copy Text</button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces Text</button>
       <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
    </div>
    <div className="container my-3" style = {{color: props.mode==='dark'?'white':'#042743'}}>
    <h3> Your text summary</h3>
   { /* <p>{text.split(" ").length} words and {text.length} characters</p> */}
   <p>{text.trim().split(/\s+/).filter((element) => element.length !== 0).length} words and {text.length} characters</p>
    { /* <p>{0.008 * text.split(" ").length} Minutes read</p> */}
    <p>{0.008 *text.trim().split(/\s+/).filter((element) => element.length !== 0).length} Minutes read</p>
    <h3>Preview</h3>
    <p>{text.length>0?text: "Enter something in the textbox above to preview it here"}</p>
    </div>
    </>
  )
}