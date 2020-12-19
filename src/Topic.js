import React,{useState} from 'react';
import db from './Firebase';
<<<<<<< HEAD
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
=======
import firebase from './Firebase';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import { Button } from "@material-ui/core";
>>>>>>> 5862faa5ae7e28526d537e74dfc5823aca7e86cd
import "./topic.css"
import { Button } from "@material-ui/core";
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
<<<<<<< HEAD
                neg:0,      
                users_list:[],
=======
                neg:0,
                users_list:[],      

>>>>>>> 5862faa5ae7e28526d537e74dfc5823aca7e86cd
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
<<<<<<< HEAD
                <Button variant="contained" color="primary"
                startIcon={<AddIcon />} type="submit" onClick={sendMessage}>Add Topic</Button>
            
=======
              {/* <button className="button" type="submit" onClick={sendMessage}>Add Topic</button> */}
              <Button variant="contained" color="primary"
                  startIcon={<AddIcon />} type="submit" onClick={sendMessage}>Add Topic</Button>
>>>>>>> 5862faa5ae7e28526d537e74dfc5823aca7e86cd
            </form>

        </div>
    )
}

export default Topic;
