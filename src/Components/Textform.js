import React, {useState} from 'react'

export default function Textform(props) {
    const handleUpClick = ()=>{
        //console.log("Uppercase was clicked" + text);
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("converted to uppercase", 'success')
    }
    const handleLowClick = ()=>{
        //console.log("Uppercase was clicked" + text);
        let newText=text.toLowerCase();
        setText(newText)
        props.showAlert("converted to lowercase", "success")
    }
    const handleOnChange = (event)=>{
        //console.log("On change")
        setText(event.target.value)
    }

    const [text, setText] = useState('')
    //setText("new text"): use this to change the state
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'? 'white':'#042743'}} >
        <h1>{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'? 'grey':'white' , color: props.mode==='dark'? 'white':'#042743'}} id="mybox" rows="8"></textarea>
</div>
<button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to uppercase</button>
<button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to lowercase</button>
    </div>
    <div className="container" style={{color: props.mode==='dark'? 'white':'#042743'}}>
<h1>Your text summary</h1>
<p>{text.split(" ").length} words and {text.length} characters</p>
<p>{0.008 * text.split(" ").length} minutes required to read the above text</p>
<h2>Preview</h2>
<p>{text.length>0?text:"Enter your text above to preview it here"}</p>
    </div>
    </>
  )
}
