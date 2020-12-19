import React,{useState} from 'react';
import db from './Firebase';
import "./topic_list.css";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import RemoveIcon from '@material-ui/icons/Remove';
<<<<<<< HEAD
import Fab from '@material-ui/core/Fab'
import { useStateValue } from './StateProvider'
import { CardActions, CardContent, Grid } from "@material-ui/core"
import Card from '@material-ui/core/Card';
function Topic_list(props) {
const [{user}, dispatch]=useStateValue();     
=======
import {Button }from "@material-ui/core"
import { useStateValue } from './StateProvider'

function Topic_list(props) {

const [{user}, dispatch]=useStateValue();    
const[present,future]=useState(props.pos);
const[present_mi,future_mi]=useState(props.minus);
>>>>>>> 5862faa5ae7e28526d537e74dfc5823aca7e86cd

// const Alertnow=()=>{
//     alert('You can vote only once');
// }
    return (
        <Card className="root" variant="outlined">
        <>
<<<<<<< HEAD
        <CardContent>
        <div className="topic_list">  
=======
        <div className="topic_list">
            <div className="left">
                <h4>{props.pos}</h4>
                <Fab size="small" color="primary" aria-label="add">
                <AddIcon   onClick={()=>db.collection('polls_list').doc(props.id).update({
                        pos:props.pos+1,
                        users_list:[...props.users_list,user.email]
                        //users_list:props.users_list.push(user.email),
                })}></AddIcon></Fab>

                
                 
            </div>
>>>>>>> 5862faa5ae7e28526d537e74dfc5823aca7e86cd
            <div className="middle">
                <p>{props.topicc}</p>  
            </div>
<<<<<<< HEAD
                <CardActions>
                <div className="left"> 
                <h4>{props.neg}</h4>
                <Fab size="small" color="primary" aria-label="add">
                <AddIcon onClick={()=>db.collection('polls_list').doc(props.id).update({
                        pos:props.pos+1,
                        users_list:[...props.users_list,user.email]
                        //users_list:props.users_list.push(user.email),
                })}></AddIcon></Fab>
                </div>
                <div className="right"> 
                <h4>{props.pos}</h4>
            <Fab size="small" color="secondary" aria-label="remove">
            <RemoveIcon onClick={()=>db.collection('polls_list').doc(props.id).update({
=======

            <div className="right">
            <h4>{props.neg}</h4>
            <Fab size="small" color="secondary" aria-label="remove">
            <RemoveIcon   onClick={()=>db.collection('polls_list').doc(props.id).update({
>>>>>>> 5862faa5ae7e28526d537e74dfc5823aca7e86cd
                        neg:props.neg-1,
                        users_list:[...props.users_list,user.email]
                        //users_list:props.users_list.push(user.email)
                        //users_list:props.users_list.push(user.email),
<<<<<<< HEAD
                })}></RemoveIcon></Fab></div></CardActions>
           
        </div>       
        </CardContent> 
=======
                })}></RemoveIcon></Fab>
            </div>
        
      
        </div>
>>>>>>> 5862faa5ae7e28526d537e74dfc5823aca7e86cd
        </>
        </Card>
    )
}

export default Topic_list;
