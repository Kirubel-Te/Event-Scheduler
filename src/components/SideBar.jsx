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
                        <p>Add Event</p>
                    </li>
                    <li>
                        <img src={Event} alt='list event' />
                        <p>List Event</p>
                    </li>
                    <li>
                        <img src={Calendar} alt='show calendar' />
                        <p>Display Calendar</p>
                    </li>
                </ul>
            </div>

            <div className="key">
                <h4>Key</h4>
                <div className='keyList'>
                    <ul>
                        <li>
                            <p>Holiday</p>
                            <div className='holiday'></div>
                        </li>
                        <li>
                            <p>Personal</p>
                            <div className='personal'></div>
                        </li>
                        <li>
                            <p>Work</p>
                            <div className='work'></div>
                        </li>
                        <li>
                            <p>Un-related</p>
                            <div className='unrelated'></div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}