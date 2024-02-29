import React, {useState, useEffect} from 'react'

export default function TextForm(props) {

   
    const [text, setText] = useState("");
   
    const [checkMode, setCheckMode] = useState('text-dark');

    useEffect(()=>{
        // console.log("Checking if there is change in the prop mode", props.mode);
        if(props.mode === 'dark') {
            setCheckMode('text-light');
        } else {
            setCheckMode('text-dark bg-light');
        }

    }, [props.mode])
    const handleOnChange = (e) => {
        setText(e.target.value);
    }

    const handleOnClick = () => {
        // console.log("UpperCase btn was clicked");
        setText(text.toUpperCase());
    }

    const capitalizeEachLetter =  () => {
        if (!text) {
            console.log("nothing");
        }
        let capitalisedText = ' '; 
        const arr = text.split(' ');
        arr.forEach((word) => {
         capitalisedText += word.charAt(0).toLocaleUpperCase() + word.slice(1) + " ";
        });
        setText(capitalisedText);
    }

    const copyToClipBoard = () => {
        let text = document.getElementById("myBox");
        text.select();
        text.setSelectionRange(0, 9999);
        navigator.clipboard.writeText(text.value);

        document.getSelection().removeAllRanges();
        props.showAlert("Text copied to clipboard", "success");
    }

    return (
        <div className='container'>
            <h2 className={checkMode} style={{ backgroundColor: props.colorCode, color:'#000 !important;' }}>{props.heading}</h2>
            <div className='px-2 my-3'>
                <textarea className={`form-control ${checkMode}`}
                    style={{
                        backgroundColor: props.colorCode,
                    color:'black'
                    }}
                    onChange={handleOnChange}
                    value={text}
                    rows="8"
                    id="myBox"
                    aria-label="With textarea"></textarea>
            </div>
   
            <button disabled={text.length===0} className="btn btn-primary my-2 mx-3"
                onClick={handleOnClick}>
                Convert to UpperCase
            </button>

            <button disabled={text.length===0} className="btn btn-primary my-2 mx-3"
                onClick={capitalizeEachLetter}>
                Capitalize Letter
            </button>

            <button disabled={text.length===0} className="btn btn-primary my-2 mx-3"
                onClick={() => { setText(text ? text.toLowerCase() : '') }}>
                Convert to Lower Case
            </button>
            
            <button disabled={text.length===0} className="btn btn-primary my-2 mx-3"
                onClick={() => { setText('') }}>
                Clear
            </button>
          
            <button disabled={text.length===0} className="btn btn-primary my-2 mx-3"
                onClick={copyToClipBoard}
            > Copy to clipboard
            </button>


            <div className="my-3">
                <h3 className={checkMode}>Your Text Summary</h3>
                <p className={`form-control ${checkMode}`}
                    style={{ backgroundColor: props.colorCode }}>{text.split(/\s+/).filter((element)=>{return element.length !== 0}).length } words and {text.length}   characters</p>
                <p className={`form-control ${checkMode}`}
                    style={{ backgroundColor: props.colorCode }}>{0.008 * text.split(/\s+/).length} Minutes read</p>
                <h2 className={checkMode}
                    style={{ backgroundColor: props.colorCode }}
                >Preview</h2>
                <p className={`form-control ${checkMode}`}
                    style={{ backgroundColor: props.colorCode }}
                >{text ? text : 'Please Enter the text in the above text area to preview'}</p>
            </div>

        </div>
    );
}
