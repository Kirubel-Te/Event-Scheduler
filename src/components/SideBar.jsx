import './SideBar.css'
import Menu from '../assets/menuu.svg'
import Calendar from '../assets/calendar.svg'
import Event from '../assets/event.svg'
import Folder from '../assets/folder.svg'
import Setting from '../assets/setting.svg'
import Help from '../assets/help.svg'

export default function SlideBar({Sclick,Stoggle}){
    return(
        <div className='main-side'>
            <div className="normal">
                {Stoggle && <div className='collapse-button'>
                <div className='side'><img src={Menu} alt='sidebarMenu' onClick={Sclick} /></div>
            </div>}
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
                    <li>
                        <img src={Setting} alt='setting' id='setting'/>
                        <p>Setting</p>
                    </li>
                </ul>
            </div>

            {/* <div className="key">
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
            </div> */}
            </div>
            <div className='bottom'>
                <img src={Help} alt="help button" />
                <p>help</p>
            </div>
            
        </div>
    )
}