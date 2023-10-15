import React from "react";
import Status from "./Status";
import UserImage from "./userImage";
import { avail } from "./quicksell";
const curstate =["Backlog","Todo","In progress","Done","Cancelled" ];
const curuser =["usr-1","usr-2","usr-3","usr-4","usr-5" ];
function Card1(data){ 
    
    var type;
    if(data.status===curstate[0]) type="error";
    else if(data.status===curstate[4]) type="cancel";
    else if(data.status===curstate[1]) type="lists";
    else if(data.status===curstate[2]) type="clock_loader_40";
    else if(data.status===curstate[3]) type="check_circle";
    var cls;
    if(data.status===curstate[0]) cls="backlog";
    else if(data.status===curstate[4]) cls="cancel";
    else if(data.status===curstate[1]) cls="todo";
    else if(data.status===curstate[2]) cls="in_progress";
    else if(data.status===curstate[3]) cls="done";
    return (
       <div className="block" key={data.id}>
        <div className="heading" ><b>{data.id}</b> </div>
        <br></br>
        <div className="title"><Status cName ={cls} statetype={type}/> <div>{data.title}</div> </div>
        <br/>
        <li>{data.tag}</li>

       </div>
    )
}
export default Card1;