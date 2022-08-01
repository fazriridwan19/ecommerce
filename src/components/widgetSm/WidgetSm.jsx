import './widgetSm.css'
import { Visibility } from "@mui/icons-material";

export default function WidgetSm() {
  return (
    <div className='widgetSm'>
        <span className="widgetSmTitle">New Join Members</span>
        <ul className="widgetSmList">
            <li className="widgetSmListItem">
                <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" className="widgetSmImg" />
                <div className="widgetSmUser">
                    <span className="widgetSmUsername">Jhon tylor</span>
                    <span className="widgetSmUserTitle">Software Engineer</span>
                </div>
                <button className="widgetSmButton">
                    <Visibility className='widgetSmIcon'/>
                    Display
                </button>
            </li>
            <li className="widgetSmListItem">
                <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" className="widgetSmImg" />
                <div className="widgetSmUser">
                    <span className="widgetSmUsername">Jhon tylor</span>
                    <span className="widgetSmUserTitle">Software Engineer</span>
                </div>
                <button className="widgetSmButton">
                    <Visibility className='widgetSmIcon'/>
                    Display
                </button>
            </li>
            <li className="widgetSmListItem">
                <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" className="widgetSmImg" />
                <div className="widgetSmUser">
                    <span className="widgetSmUsername">Jhon tylor</span>
                    <span className="widgetSmUserTitle">Software Engineer</span>
                </div>
                <button className="widgetSmButton">
                    <Visibility className='widgetSmIcon'/>
                    Display
                </button>
            </li>
            <li className="widgetSmListItem">
                <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" className="widgetSmImg" />
                <div className="widgetSmUser">
                    <span className="widgetSmUsername">Jhon tylor</span>
                    <span className="widgetSmUserTitle">Software Engineer</span>
                </div>
                <button className="widgetSmButton">
                    <Visibility className='widgetSmIcon'/>
                    Display
                </button>
            </li>
        </ul>
    </div>
  )
}
