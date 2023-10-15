import React from "react";
function Status(props){
    return(
        <span className= {"material-symbols-outlined " + props.cName }>{props.statetype}</span>
    )
}
export default Status