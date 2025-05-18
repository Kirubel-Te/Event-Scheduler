import './Home.css'
import Event from '../assets/event.svg'
import Menu from '../assets/menuu.svg'
import Icalendar from './BasicDateCalendar'

export default function Home(){
    return(
        <div>
            <div className='toggleclass'>
                <img src={Menu} alt='menu'/>
            </div>
            <header>
                <h1>Evnet Scheduler</h1>
                <img src={Event}/>
            </header>
            <div className='cal-home'>
                <div className='cal-p'>
                    <h2>Plan, Schedule, Manage</h2>
                    <p>Effortlessly manage your schedule and collaborate in real-time</p>
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
                <p>footer</p>
            </div>
        </div>
    )
}