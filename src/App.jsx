import Form from "./components/Form";
import Holiday from "./components/Holiday";
import SideBar from './components/SideBar';
import Home from './components/Home'
import React from "react";
import Icalendar from './components/BasicDateCalendar'

import './App.css'




export default function App(){
  const[toggle,settoggle] = React.useState(false)
  function clickhandler(){
    settoggle(prev => !prev)
  }

  const mainstyle = {
    width: '100%',
  }

  return(
    <div className="main-content">
      {toggle && <div className={`sideBar ${!toggle ? 'closed' : ''}`}>
        <SideBar Sclick={clickhandler} Stoggle={toggle} />
      </div>}
      <div className="main-body" style={!toggle ? mainstyle : undefined}>
        <Home click={clickhandler} toggle={toggle}/>
      </div>
    </div>
  )
}