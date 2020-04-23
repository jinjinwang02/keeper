import React from "react";
import axios from "axios";


function Note (props){
    return (
    <div className="note">
    <h1>{props.title}</h1>
    <p>{props.content}</p>
    {/* <button className="edit-button">EDIT</button> */}
    <button 
      className="delete-button" 
      onClick={()=>{
      axios.delete('/notes/'+ props.id).then(res => {
        if(res.status === 200) {
          props.onChecked(props.id)
        }})
      }}>DELETE</button>
    </div>
    );
}

export default Note;