import React from "react";
import './App.css';


 function Popup({trigger,setTrigger,onebook}) {

    return(trigger) ? (
        <div>
        <div className="popup">
            <div className="popup-inner">
                <button className="close-btn" onClick={() => setTrigger(false)}>close</button>
                <img src={onebook.image} alt=""/>
             
            </div>
          
         </div>
       
         </div>
    ) : "";
 
    
            
          }
       
    
 
       
        
   


export default Popup;