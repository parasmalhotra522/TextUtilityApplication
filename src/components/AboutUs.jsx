import React,{useEffect, useState} from 'react'

export default function AboutUs({props}) {

    console.log("Checking the props", props);
    const [myStyles, setStyles] = useState({
        backgroundColor:props === 'light' ? '#fff' : '#042743',
        color: props === 'light' ? '#000' : '#fff',
        border:'2px solid #fff' 
    });


    const [btnText, setBtnText] = useState("Enable Dark Mode");

    useEffect(() => {
        toggleDarkMode();
    }, [props]);


    const toggleDarkMode = () => {
        if (props === 'light') {
            setBtnText("Enable Dark Mode");
            setStyles({
                backgroundColor:'#fff',
                color: '#000',
              
            });
          
        } else {
            setStyles({
                backgroundColor:'#042743',
                color: '#fff',
                borderColor:'#fff'
            });
            setBtnText("Enable Light Mode");
            
        }
    }


  return (
    <div>
        <div className='container my-3' style={myStyles}>
      <div className="accordion" style={myStyles} id="accordionExample">
        <h2>About Us</h2>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button" type="button" 
            
            style={myStyles} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Accordion Item #1
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyles}>
                <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
            </div>
        </div>
        <div className="accordion-item" style={myStyles}>
            <h2 className="accordion-header" style={myStyles}>
            <button className="accordion-button collapsed" 
            style={myStyles}
            type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Accordion Item #2
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyles}>
                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" 
            style={myStyles}
            type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Accordion Item #3
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyles}>
                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
            </div>
        </div>
        </div>
   
        {/* <div className='container'>
            <button className="btn btn-primary my-3"
            onClick={toggleDarkMode}
            >{btnText}</button>
        </div> */}
        </div>
    </div>
   
  
  )
}
