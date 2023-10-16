import React, { useState, useEffect } from "react";
import Card from "./Card";
import Find from "./Find";
import UserImage from "./userImage";
import Card1 from "./Card1";
import Status from "./Status";
// import Details from "./Details";
// import Options from "./Options";
var avail= [];
function Quicksell(props){
    
    const [ticket, ticketState] = useState([]);
    const [user, userState] = useState([]);
    const[click,check]  =useState(false);
    
    const fetchApiData = async() => {
        try{
            const res = await fetch("https://api.quicksell.co/v1/internal/frontend-assignment");
            const data1 = await res.json();
            const {tickets, users} = data1;
            if(tickets.length>0)
            ticketState(tickets);
            if(users.length>0)
            userState(users);
        }
        catch(err){
            console.log(err);
        }
    }

    function clicked(){
        check(true);
    }
    function unClicked(){
        check(false);
        // console.log("hi");
    }
   


    useEffect(() => {fetchApiData();}, [] )
    // filtering the backlog items
    const curstate =["Backlog","Todo","In progress","Done","Cancelled" ];
    
    const backlog = ticket.filter(function(back){
        return back.status===curstate[0];
    })
    // filtering the todo items
    const toDo = ticket.filter(function(todo){
        return todo.status===curstate[1];
    })
    // filtering the In Progress items
    const progress = ticket.filter(function(prog){
        return prog.status===curstate[2];
    })
    // filtering the Completed items
    const done = ticket.filter(function(com){
        return com.status===curstate[3];
    })
    // filtering the cancelled items
    const cancel = ticket.filter(function(notexit){
        return notexit===curstate[4];
    })

    const curuser =["usr-1","usr-2","usr-3","usr-4","usr-5" ];
    const user_1 = ticket.filter(function(val){
        return val.userId===curuser[0];
    })
    const user_2 = ticket.filter(function(val){
        return val.userId===curuser[1];
    })
    const user_3 = ticket.filter(function(val){
        return val.userId===curuser[2];
    })
    const user_4= ticket.filter(function(val){
        return val.userId===curuser[3];
    })
    const user_5 = ticket.filter(function(val){
        return val.userId===curuser[4];
    })
    var count = 0;
    const username = user.map(function(val){
        return val.name;
    })
    // console.log(username);
    const prior =[];
    for(var i =0;i<5;i++){
        prior[i] = ticket.filter(function(val){
            return val.priority==i;})
    }

    var k =0;
    user.map(function(val){
        avail[i++]=val.available
    })

    
   
    if(props.status1)
        return (
            <div className="status">
                <div className="state"><p><Status cName ={"backlog"} statetype ={"error"}/>{curstate[0]} &nbsp;&nbsp;&nbsp; {backlog.length}</p>{backlog.map(Card)}</div>
                <div className="state"><p> <Status cName ={"todo"} statetype ={"lists"}/> {curstate[1]}&nbsp;&nbsp;&nbsp; {toDo.length}</p>{toDo.map(Card)}</div>
                <div className="state"><p> <Status cName ={"in_progress"} statetype ={"clock_loader_40"}/>{curstate[2]} &nbsp;&nbsp;&nbsp;{progress.length}</p>{progress.map(Card)}</div>
                <div className="state"><p> <Status cName ={"done"} statetype ={"check_circle"}/>{curstate[3]} {done.length}</p>{done.map(Card)}</div>
                <div className="state"><p><Status cName ={"cancel"} statetype ={"cancel"}/>{curstate[4]} &nbsp;&nbsp;&nbsp;{cancel.length}</p>{cancel.map(Card)}</div>
            </div>
        )
        else if(props.user1)
        return (
            <div className="people">
                <div className="user"><p style={{marginLeft: "10%"}}>{username[0]} &nbsp;&nbsp;&nbsp;{user_1.length}<span className="image-user"><UserImage name  = {curuser[0] } data ={avail[5]}/></span></p>{user_1.map(Card1)}</div>
                <div className="user"><p style={{marginLeft: "10%"}}>{username[1]} &nbsp;&nbsp;&nbsp;{user_2.length}<span className="image-user"><UserImage name  = {curuser[1]} data ={avail[6]}/></span></p>{user_2.map(Card1)}</div>
                <div className="user"><p style={{marginLeft: "10%"}}>{username[2]} &nbsp;&nbsp;&nbsp;{user_3.length}<span className="image-user"><UserImage name  = {curuser[2]} data ={avail[7]} /></span></p>{user_3.map(Card1)}</div>
                <div className="user"><p style={{marginLeft: "10%"}}>{username[3]} &nbsp;&nbsp;&nbsp;{user_4.length}<span className="image-user"><UserImage name  = {curuser[3]} data ={avail[8]}/></span></p>{user_4.map(Card1)}</div>
                <div className="user"><p style={{marginLeft: "10%"}}>{username[4]} &nbsp;&nbsp;&nbsp;{user_5.length}<span className="image-user"><UserImage name  = {curuser[4]} data ={avail[9]}/></span></p>{user_5.map(Card1)}</div>
            </div>
        )
        else if(props.priority1){
            return(
                <div className="status">
                <div className="state"><p><span className="material-symbols-outlined">more_horiz</span>No Priority &nbsp;&nbsp;&nbsp;{prior[0].length} </p>{prior[0].map(Card)}</div>

                <div className="state"><p><span style={{color:"red"}} className="material-symbols-outlined">zone_person_urgent</span> Urgent &nbsp;&nbsp;&nbsp; {prior[4].length}</p>{prior[4].map(Card)}</div>
                <div className="state"><p><span className="material-symbols-outlined">signal_cellular_4_bar</span> High &nbsp;&nbsp;&nbsp;{prior[3].length}</p>{prior[3].map(Card)}</div>

                <div className="state"><p><span className="material-symbols-outlined">signal_cellular_3_bar</span> Medium &nbsp;&nbsp;&nbsp;{prior[2].length} </p>{prior[2].map(Card)}</div>
                <div className="state"><p> <span className="material-symbols-outlined">signal_cellular_1_bar</span>Low &nbsp;&nbsp;&nbsp; {prior[1].length}</p>{prior[1].map(Card)}</div>
                
            </div>
            )
        }
        else    
        {
            return(
                <div className="ordering" >
                    <h1 Decreasing order of priority/>
                    <p><span style={{color:"red"}} className="material-symbols-outlined">zone_person_urgent</span> Urgent {prior[4].length}</p>
                    {prior[4].map(Card)}
                    <p><span className="material-symbols-outlined">signal_cellular_4_bar</span> High {prior[3].length} </p>
                    {prior[3].map(Card)}
                    <p><span className="material-symbols-outlined">signal_cellular_3_bar</span> Medium {prior[2].length}</p>
                    {prior[2].map(Card)}
                    <p> <span className="material-symbols-outlined">signal_cellular_1_bar</span>Low  {prior[1].length}</p>
                    {prior[1].map(Card)}
                    <p><span className="material-symbols-outlined">more_horiz</span>No Priority {prior[0].length} </p>
                    {prior[0].map(Card)}
                </div>
                
            )
        }
    
}

export default Quicksell
export {avail};
