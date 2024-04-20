import React from 'react'

export default function Button(props) {
  return (
      <button
        className={
          props.title === "7" 
          ? 
          "col-start-1 py-1 px-4 bg-slate-200 rounded-lg shadow-[0_2px_15px_-5px_rgba(0,0,0,0.5)] hover:shadow-lg  active:shadow-none duration-200"
          :
          props.title === "0" 
          ?
          "col-span-2 py-1 px-4 bg-slate-200 rounded-lg shadow-[0_2px_15px_-5px_rgba(0,0,0,0.5)] hover:shadow-lg  active:shadow-none duration-200"
          :
          " py-1 px-4 bg-slate-200 rounded-lg shadow-[0_2px_15px_-5px_rgba(0,0,0,0.5)] hover:shadow-lg  active:shadow-none duration-200"
        }
        onClick={props.func}
        
      >
        {props.title}
      </button>
  )
}
