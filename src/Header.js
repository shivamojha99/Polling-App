import React, { useEffect, useState } from "react";
import db, {auth} from "./Firebase";
import "./Header.css";
import Topic from "./Topic";
import Topicslist from "./Topic_list";
import { useStateValue } from "./StateProvider";
import { Button, Grid } from "@material-ui/core";
// import Login from "./Login.js";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
const userId = sessionStorage.getItem('userId');

const Judge = (props) => {
     const [{canVote}, dispatch] = useStateValue();

    //  if(props.vote==true)
    //  {
    //   dispatch({           ---A global variable canVote was introduced
    //                        ---but
    //       type:"canvote"   ---This part was getting error of maximum
    //                        ---depth Reached....Hence commented and passed
    //                        ---as a normal prop
    //     });
        
    //  }

    //  else if(props.vote==false)
    //  {
    //   dispatch({
    //     type:"cannotvote"
    //   });
      
    //  }
     
     if (props.topic.users_list.includes(userId) === props.vote ) {
    return(
    
      <Topicslist
        topicc={props.topic.poll}
        pos={props.topic.pos}
        neg={props.topic.neg}
        id={props.topic.id}
        users_list={props.topic.users_list}
        vote={props.vote}
      />);}
   else{
    console.log('Hello4');
   return null;
     }};
const signout = () =>{
  sessionStorage.clear();
  window.location.reload();
  // auth.signOut().then(function() {  
    //   <Login/>
    // }).catch(function(error) {
    //   alert(error.message)
    // });
  };

function Header() {
  const [topicslist, settopicslist] = useState([]);
  const [vote , setVote] = useState(false);
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

  const myFunction = () => {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
  
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
        <div><Button onClick={signout}><ExitToAppIcon/>Sign Out</Button></div>
                  </div>
      <Grid container spacing={0}>
        <Grid item xs={2} >
          <div className="dropdown">
              <button onClick={myFunction} className="dropbtn">  <AccountCircleIcon/>  Profile </button>
              <div id="myDropdown" className="dropdown-content">
                <img src={sessionStorage.getItem('userPhoto')} alt={sessionStorage.getItem('userName')} />
                <p> {sessionStorage.getItem('userName')} </p>
                <br></br>
                <p> {sessionStorage.getItem('userId')} </p>
                <br></br>
                <p id="created_btn" onClick={ () => setVote(true) }> voted polls </p>
                <p id="created_btn" onClick={ () => setVote(false) }> New polls </p>
                <br></br>
                {/* <a href="#contact">Contact</a> */}
              </div>
          </div>
      </Grid>
        <Grid item xs={10}> 
          <div className="middle1">
            <Topic />
          </div>
          
        </Grid>
      </Grid>
      <div className="lower">
        {topicslist.map((topic) => (
            <Judge topic={topic} vote={vote} />            
        ))}
      </div>
    </>
  );}
export  default Header;
