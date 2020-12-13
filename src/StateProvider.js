import React,{createContext,useContext,useReducer} from 'react';

export const StateContext=createContext();

export const StateProvider =({reducer,initialState,children})=>(
    <StateContext.Provider value={useReducer(reducer,initialState)}>
        {children}   
        {/*Every time this statecontext's object is called it will 
        invoke the useReducer function that will set the user */}
    </StateContext.Provider>);
    
    /**
     * This is a fat arrow function with a single expression without the 
     * use of curly braces and return statement
     * we can either remove the curly braces
     */

export  const useStateValue = ( )=> useContext(StateContext);
/*It is acting as a function that returns the reference to useContext hook */