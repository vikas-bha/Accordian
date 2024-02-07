// import React, { useState } from 'react'
// import data from './data.js'
// import './App.css'
// const Accordian = () => {

//     const [selected, setSelected] = useState(null);
//     const [enableMultiSelection, setEnableMultiSelection ] = useState(false);
//     const [multiple, setMultiple] = useState([])
//     const handleSingleSelection = (getCurrentId)=>{
//             console.log(getCurrentId)
//             setSelected(getCurrentId===selected ? null : getCurrentId)  // closing and opening the accordian at the same time 
//     }

//     const handleMultiSelection  =(getCurrentId) =>{
//         let cpyMultiple = [...multiple]
//         const findIndexOfCurrent = cpyMultiple.indexOf(getCurrentId);
//         console.log(findIndexOfCurrent)

//         if(findIndexOfCurrent === -1) cpyMultiple.push(getCurrentId);
//         else cpyMultiple.splice(findIndexOfCurrent,1)

//         setMultiple(cpyMultiple)

//     }
//     console.log(selected)
//   return (
//     <div className='wrapper'>
//         <button onClick={()=>{setEnableMultiSelection(!enableMultiSelection)}}>Enable MultiSelection</button>

//         <div className="accordian">


//                 {
//                     data && (
//                         data.map((d)=>
//                             <div className='item'>
//                                     <div onClick={enableMultiSelection ? ()=>handleMultiSelection(d.id) : ()=>handleSingleSelection(d.id)} className="title">
//                                         <h3>{d.question}</h3>
//                                         <span>+</span>
//                                     </div>{
//                                         selected === d.id ? 
//                                         <div className='content'>
//                                             {d.answer}

//                                         </div> : null
//                                     }
//                             </div>
//                         )
//                     )
//                 }
//         </div>
//     </div>
//   )
// }

// export default Accordian

//single selection
//multiple selection

import { useState } from "react";
import data from "./data";
import "./App.css";

export default function Accordian() {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);

  function handleSingleSelection(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }

  function handleMultiSelection(getCurrentId) {
    let cpyMutiple = [...multiple];
    const findIndexOfCurrentId = cpyMutiple.indexOf(getCurrentId);

    console.log(findIndexOfCurrentId);
    if (findIndexOfCurrentId === -1) cpyMutiple.push(getCurrentId); // here we are adding that selected item in our array, so that it could be shown with the others
    else cpyMutiple.splice(findIndexOfCurrentId, 1);  // here it removes that particular list item from the array

    setMultiple(cpyMutiple);
  }

  console.log(selected, multiple);
  return (
    <div className="acc-wrapper">
      <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
        Enable Multi Selection
      </button>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item">
              <div
                onClick={
                  enableMultiSelection
                    ? () => handleMultiSelection(dataItem.id)
                    : () => handleSingleSelection(dataItem.id)
                }
                className="title"
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {enableMultiSelection
                ? multiple.indexOf(dataItem.id) !== -1 && (
                    <div className="acc-content ">{dataItem.answer}</div>
                  )
                : selected === dataItem.id && (
                    <div className="acc-content ">{dataItem.answer}</div>
                  )}
              {/* {selected === dataItem.id ||
              multiple.indexOf(dataItem.id) !== -1 ? (
                <div className="content">{dataItem.answer}</div>
              ) : null} */}
            </div>
          ))
        ) : (
          <div>No data found !</div>
        )}
      </div>
    </div>
  );
}