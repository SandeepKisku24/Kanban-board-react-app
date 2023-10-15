import React from "react";
import UserImage from "./userImage";
import { avail } from "./quicksell";
const curuser =["usr-1","usr-2","usr-3","usr-4","usr-5" ];
function Card(data){ 
    var i;
    if(data.userId===curuser[0]) i =5;
    else if(data.userId===curuser[1]) i =6;
    else if(data.userId===curuser[2]) i =7;
    else if(data.userId===curuser[3]) i =8;
    else if(data.userId===curuser[4]) i =9;
    // console.log(i + " hi");
    return (
       <div className="block" key={data.id}>
        <div className="heading" ><b>{data.id}</b><UserImage name = {data.userId} data = {avail[i]}/> </div>
        <br></br>
        <div className="title"> {data.title}</div>
        <br></br>
        <li>{data.tag}</li>

       </div>
    )
}
export default Card;