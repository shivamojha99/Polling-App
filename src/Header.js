import React, { useEffect, useState } from "react";
<<<<<<< HEAD
import db, {auth} from "./Firebase";
=======
import db from "./Firebase";
>>>>>>> 5862faa5ae7e28526d537e74dfc5823aca7e86cd
import "./Header.css";
import Topic from "./Topic";
import Topicslist from "./Topic_list";
import { useStateValue } from "./StateProvider";
<<<<<<< HEAD
import { Button, Grid } from "@material-ui/core";
import Login from "./Login.js";
=======

>>>>>>> 5862faa5ae7e28526d537e74dfc5823aca7e86cd
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
<<<<<<< HEAD
      />);}
   else{
   return null;
     }}
const signout = () =>{
  auth.signOut().then(function() {
      <Login/>
    }).catch(function(error) {
      alert(error.message)
    });
  }
  
=======
      />);
    
  }
  else{
    return null;
      // return(
      //   <div className="blur">
      //     <Topicslist
      //     topicc={props.topic.poll}
      //     pos={props.topic.pos}
      //     neg={props.topic.neg}
      //     id={props.topic.id}
      //     users_list={props.topic.users_list}
      //   />
      //   </div>
      //   );

    
  }
};
>>>>>>> 5862faa5ae7e28526d537e74dfc5823aca7e86cd

function Header() {
  const [topicslist, settopicslist] = useState([]);
  const [{ user }, dispatch] = useStateValue();
<<<<<<< HEAD
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

=======

  useEffect(() => {
    db.collection("polls_list").orderBy('pos','desc').onSnapshot((snapshot) => {
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

>>>>>>> 5862faa5ae7e28526d537e74dfc5823aca7e86cd
  return (
    <>
      <div className="header">
        <div>
<<<<<<< HEAD
          <Button variant="contained" color="white">
            New
          </Button>
        </div>

        <div>
          <Button variant="contained" color="white">
            Today
          </Button>
        </div>
        <div><Button onClick={signout}>Sign Out</Button></div>
=======
          <button>
            <h2>New</h2>
          </button>
        </div>

        <div>
          <button>
            <h2>Today</h2>
          </button>
        </div>
>>>>>>> 5862faa5ae7e28526d537e74dfc5823aca7e86cd
      </div>

      <div className="middle1">
        <Topic />
      </div>
<<<<<<< HEAD
=======

>>>>>>> 5862faa5ae7e28526d537e74dfc5823aca7e86cd
      <div className="lower">
        {topicslist.map((topic) => (
            <Judge topic={topic} />            
        ))}
      </div>
    </>
  );
}

<<<<<<< HEAD
export  default Header;
=======
export default Header;
>>>>>>> 5862faa5ae7e28526d537e74dfc5823aca7e86cd
