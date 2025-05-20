import './Home.css'
import Event from '../assets/event.svg'
import Calendar from '../assets/calendar.svg'
import Menu from '../assets/menuu.svg'
import Icalendar from './BasicDateCalendar'
import Material from '../assets/material-ui.svg'
import ReactL from '../assets/react.svg'

export default function Home({click,toggle}){
    return(
        <div>
            {!toggle && <div className='toggleclass'>
                <img src={Menu} alt='menu'onClick={click}/>
            </div>}
            <header>
                <h1>Evnet Scheduler</h1>
                <img src={Event}/>
            </header>
            <div className='cal-home'>
                <div className='cal-p'>
                    <h3>Plan, Schedule, Manage</h3>
                    <h6>Effortlessly manage your schedule and collaborate in real-time</h6>
                    <div className='button-name'>
                        <button id='btn1'>Get Started</button>
                        <button id='btn2'>Discover</button>
                    </div>
                </div>
                <div className='cal-cal'>
                    <Icalendar/>
                </div>
            </div>

            <div className='home-foot'>
                <div className='footer-one'>
                    <img src={Calendar} alt='calendar' />
                    <p>Event Scheduler</p>
                </div>
                <div className='footer-two'>
                    <h6><a>Calendar</a></h6>
                    <h6><a>Form Event</a></h6>
                    <h6><a>Home</a></h6>
                </div>
                <div className='footer-three'>
                    <div>
                        <h6>developed by: Kirubel-Te</h6>
                    </div>
                    <div className='mrLogo'>
                        <img src={Material} alt="material ui" />
                        <img src={ReactL} alt="react logo" />
                    </div>
                    <div>
                        <h6>© 2025. All rights reserved.</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}