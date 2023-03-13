import React, { useState } from "react";

export default function TextForm(props) {

  //make function handleUpCase
  const handleUpClick = () => {
    // console.log("upperCase was clicked" +text);
    let upCaseText = text.toUpperCase();
    setText(upCaseText);
   props.showAlert("converted to upper case","success");
  }

  //make function handleLowCase
  const handleLowClick = ()=>{
    let lowCaseText=text.toLocaleLowerCase();
    setText(lowCaseText);
    props.showAlert("converted to lower case","success");
  }

  //make function handleOnChange
  const handleOnChange = (event) => {
    setText(event.target.value);
  }

  //speak function
  const speak =()=>{
      let message = new SpeechSynthesisUtterance();
      message.text = text;
      // let voice = speechSynthesis.getVoices().find(v => v.voiceURI.includes('en-') && v.voiceURI.includes('Female')); 
      // message.voice = voice; 
    window.speechSynthesis.speak(message);
  }

  const clearText =()=>{
    setText('');
    props.showAlert("text cleared","success");
  }

  const [text, setText] = useState('')
  
  // changing the state of text
  // text="write text here" ...wrong way to change the state
  // setText="write text here".at.correct way 
  return (
    <>
      <div className="container"style={{color: props.mode==='dark'?'white':'black'}} >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" style={{backgroundColor: props.mode==='dark'?'#343a40':'white',color: props.mode==='dark'?'white':'black'}} value={text} onChange={handleOnChange}   id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert into UpperCase</button>
        <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert into LowerCase</button>
        <button className="btn btn-primary mx-1" onClick={speak}>Speak</button>
        <button className="btn btn-primary mx-1" onClick={clearText}>Clear All</button>
      </div>

      <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
        <h3>your text summary is here</h3>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008 *  text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minutes read</p>
        <h4>Preview Text</h4>
        <p>{text.length>0?text:"Enter the text above to preview here"}</p>

      </div>

    </>
  );
}
