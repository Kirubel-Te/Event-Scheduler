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
                <div>
                    <p>Effortlessly manage your schedule and collaborate in real-time</p>
                </div>
                <Icalendar/>
            </div>
        </div>
    )
}