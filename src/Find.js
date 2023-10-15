import React from "react";
function Find(val){
    // console.log("ok");
    return <div key= {val.id}>
        <p>{val.id}</p>
        <p>{val.title}</p>
        <p>{val.tag}</p>
        <p>{val.status}</p>
    </div>
}
export default Find