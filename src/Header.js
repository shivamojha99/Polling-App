import React,{useEffect, useState} from 'react'
import db from './Firebase'
import "./Header.css"
import Topic from './Topic'
import Topicslist from './Topic_list'
function Header() {
    const[topicslist,settopicslist]=useState([]);
    useEffect(()=>{
        db.collection('polls_list')
        .onSnapshot(snapshot =>{
            settopicslist(snapshot.docs.map(doc=>(
                {
                    id:doc.id,
                    poll:doc.data().topic,
                    pos:doc.data().pos,
                    neg:doc.data().neg
                }
            )))
        })

    },[]);

    return (
        <>
        <div className="header">
            <div>
             <button><h2>New</h2></button>
            </div>

            <div>
            <button><h2>Today</h2></button>
            </div>

        </div>

        <div className="middle1">
            <Topic/>
        </div>

        <div className="lower">
            {
                topicslist.map((topic)=>(
                    <>
               
                     <Topicslist topicc={topic.poll} pos={topic.pos} neg={topic.neg} id={topic.id} />
                     </>
                ))
                
            }
           

        </div>
        </>
    )
}

export default Header
