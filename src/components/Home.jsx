import './Home.css'
import Event from '../assets/event.svg'
import Menu from '../assets/menuu.svg'

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
        </div>
    )
}