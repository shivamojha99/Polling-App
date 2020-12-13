import React,{useState} from 'react';
import db from './Firebase';
import "./topic_list.css";
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import {Button }from "@material-ui/core"
import { useStateValue } from './StateProvider'

function Topic_list(props) {

const [{user}, dispatch]=useStateValue();    
const[present,future]=useState(props.pos);
const[present_mi,future_mi]=useState(props.minus);

const Alertnow=()=>{
    alert('You can vote only once');
}
    return (
        <>
        <div className="topic_list">
            <div className="left">
                <h4>{props.pos}</h4>
                <AddIcon  onClick={()=>db.collection('polls_list').doc(props.id).update({
                        pos:props.pos+1,
                        users_list:[...props.users_list,user.email]
                        //users_list:props.users_list.push(user.email),
                })}></AddIcon>

                
                 
            </div>
            <div className="middle">
                <p>{props.topicc}</p>
              
            </div>

            <div className="right">
            <h4>{props.neg}</h4>
            <RemoveIcon  onClick={()=>db.collection('polls_list').doc(props.id).update({
                        neg:props.neg-1,
                        users_list:[...props.users_list,user.email]
                        //users_list:props.users_list.push(user.email)
                        //users_list:props.users_list.push(user.email),
                })}></RemoveIcon>
            </div>
        
      
        </div>
        </>
    )
}

export default Topic_list;
