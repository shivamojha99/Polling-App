import React,{useState} from 'react';
import db from './Firebase';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import { Button } from "@material-ui/core";
import "./topic.css"
const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));
function Topic() {
    const [input,setinput]=useState("");
    const sendMessage=(e)=>{
            e.preventDefault();
            
            db.collection('polls_list').add({
                topic:input,
                // timestamp:firebase.firestore.FieldValue.serverTimestamp(),
                pos:0,
                neg:0,      
                users_list:[],      

            })
            setinput("");
            
    }
    return (
        <div className="form">
            <form  className="inside_form">
                <input className="inp"
                value={input}
                onChange={e=> setinput(e.target.value)}
                placeholder={"Enter the trending Poll"}/>
                
              {/* <button className="button" type="submit" onClick={sendMessage}>Add Topic</button> */}
              <Button variant="contained" color="primary"
                  startIcon={<AddIcon />} type="submit" onClick={sendMessage}>Add Topic</Button>
            </form>

        </div>
    )
}

export default Topic;
