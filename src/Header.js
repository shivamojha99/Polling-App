import React, { useEffect, useState } from "react";
import db, {auth} from "./Firebase";
import "./Header.css";
import Topic from "./Topic";
import Topicslist from "./Topic_list";
import { useStateValue } from "./StateProvider";
import { Button, Grid } from "@material-ui/core";
import Login from "./Login.js";
const Judge = (props) => {
    const [{ user }, dispatch] = useStateValue();
     if (props.topic.users_list.includes(user.email) === false) {
    return(
      <Topicslist
        topicc={props.topic.poll}
        pos={props.topic.pos}
        neg={props.topic.neg}
        id={props.topic.id}
        users_list={props.topic.users_list}
      />);}
   else{
   return null;
     }};

function Header() {
  const [topicslist, settopicslist] = useState([]);
  const [{ user }, dispatch] = useStateValue()
  useEffect(() => {
    db.collection("polls_list").onSnapshot((snapshot) => {
      settopicslist(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          poll: doc.data().topic,
          pos: doc.data().pos,
          neg: doc.data().neg,
          users_list: doc.data().users_list,
        }))
      );
    });
  }, []);
  const Signout = () =>{
  const [{ user }, dispatch] = useStateValue();
  auth.signOut().then(function() {
      dispatch({
        user:null,
  })
    }).catch(function(error) {
      alert(error.message)
    }); 
};


  return (
    <>
      <div className="header">
        <div>
          <Button variant="contained" color="white">
            New
          </Button>
        </div>

        <div>
          <Button variant="contained" color="white">
            Today
          </Button>
        </div>
        <div><Button onClick={Signout}>Sign Out</Button></div>
        </div>
     
      <div className="middle1">
        <Topic />
      </div>
      <div className="lower">
        {topicslist.map((topic) => (
            <Judge topic={topic} />            
        ))}
      </div>
    </>
  );}
export  default Header;
