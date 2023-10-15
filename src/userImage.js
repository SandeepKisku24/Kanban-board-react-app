import React from "react";
function UserImage(props){
    // console.log(props.data)
    return <div className="image-block"><img className="dp" src={props.name +".png"}/> <span class="material-symbols-outlined" style={{color: props.data?"#f4c20d":"#50a3a2", marginTop: "-13px", size: "16"}}>
    fiber_manual_record
    </span></div> 
}
export default UserImage;