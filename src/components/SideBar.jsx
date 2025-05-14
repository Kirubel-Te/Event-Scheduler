import './SideBar.css'
import Menu from '../assets/menuu.svg'
import Calendar from '../assets/calendar.svg'
import Event from '../assets/event.svg'
import Folder from '../assets/folder.svg'

export default function SlideBar(){
    return(
        <div className='main-side'>
            <div className='collapse-button'>
                <div className='side'><img src={Menu} alt='sidebarMenu'/></div>
            </div>

            <div className='Profile'>
                <div className='P-img'>
                    <h3>K</h3>
                </div>
                <div className='P-name'>
                    <h5>Kirubel Tesfaye</h5>
                </div>
            </div>

            <div className="menu">
                <ul>
                    <li>
                        <img src={Folder} alt='add event'/>
                        <h6>Add Event</h6>
                    </li>
                    <li>
                        <img src={Event} alt='list event' />
                        <h6>List Event</h6>
                    </li>
                    <li>
                        <img src={Calendar} alt='show calendar' />
                        <h6>Display Calendar</h6>
                    </li>
                </ul>
            </div>

            <div className="key">
                <h4>Key</h4>
                <ul>
                    <li>
                        <h6>Holiday</h6>
                        <div className='holiday'></div>
                    </li>
                    <li>
                        <h6>Personal</h6>
                        <div className='personal'></div>
                    </li>
                    <li>
                        <h6>Work</h6>
                        <div className='work'></div>
                    </li>
                    <li>
                        <h6>Un-related</h6>
                        <div className='unrelated'></div>
                    </li>
                </ul>
            </div>
        </div>
    )
}