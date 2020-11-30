import React,{useState} from 'react';
import db from './Firebase';
import firebase from './Firebase'
import "./topic.css"
function Topic() {
    const [input,setinput]=useState("");
    const sendMessage=(e)=>{
            e.preventDefault();
            
            db.collection('polls_list').add({
                topic:input,
                // timestamp:firebase.firestore.FieldValue.serverTimestamp(),
                pos:0,
                neg:0      

            })
            setinput("");

    }
    return (
        <div className="form">
            <form  className="inside_form">
                <input
                value={input}
                onChange={e=> setinput(e.target.value)}
                placeholder={"Enter the trending Poll"}/>
                <button type="submit" onClick={sendMessage}>Add Topic</button>
            
            </form>

        </div>
    )
}

export default Topic;
