import React,{useState} from 'react';
import db from './Firebase';
import "./topic_list.css";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import RemoveIcon from '@material-ui/icons/Remove';
import { CardActions, CardContent, Grid } from "@material-ui/core"
import Card from '@material-ui/core/Card';
import { useStateValue } from "./StateProvider";
function Topic_list(props) {

const [{user}, dispatch]=useStateValue();    

// const Alertnow=()=>{
//     alert('You can vote only once');
// }
    return (
        <div className="topic_list">  
        <Card className="root" variant="outlined">
        <>
        <CardContent>
            <div className="middle">
                <p>{props.topicc}</p>  
            </div>
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
            <h4>{props.neg}</h4>
            <Fab size="small" color="secondary" aria-label="remove">
            <RemoveIcon   onClick={()=>db.collection('polls_list').doc(props.id).update({
                        neg:props.neg-1,
                        users_list:[...props.users_list,user.email]
                        //users_list:props.users_list.push(user.email)
                        //users_list:props.users_list.push(user.email),
                })}></RemoveIcon></Fab></div></CardActions>         
        </CardContent> 
        </>
        </Card>
        </div>
    )
}

export default Topic_list;
