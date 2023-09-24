import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let initialState = 0;
const reducer = ( state, action) =>{
   switch (action.type){
      case "INC":
        return state+1;
      default:
        return state
  }


 
}
let state = reducer(initialState, {type:"INC"})
state = reducer(state,{type:"INC"});
state = reducer(state,{type:"INC"});
state = reducer(state,{type:"INC"});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
