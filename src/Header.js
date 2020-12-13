import React, { useEffect, useState } from "react";
import db from "./Firebase";
import "./Header.css";
import Topic from "./Topic";
import Topicslist from "./Topic_list";
import { useStateValue } from "./StateProvider";

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
      />);
    
  }
  else{
      return null;

    
  }
};

function Header() {
  const [topicslist, settopicslist] = useState([]);
  const [{ user }, dispatch] = useStateValue();

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

  return (
    <>
      <div className="header">
        <div>
          <button>
            <h2>New</h2>
          </button>
        </div>

        <div>
          <button>
            <h2>Today</h2>
          </button>
        </div>
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
  );
}

export default Header;
