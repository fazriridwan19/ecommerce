import React from 'react'
import './topbar.css'
import { NotificationsNone, Language, Settings } from '@mui/icons-material'

export default function TopBar() {
  return (
    <div className="topbar">
        <div className="topbarWrapper">
            <div className="topLeft">
                <span className="logo">Admin Dashboard</span>
            </div>
            <div className="topRight">
                <div className="topbarIconContainer">
                    <NotificationsNone/>
                    <span className="topIconBadge">2</span>
                </div>
                <div className="topbarIconContainer">
                    <Language/>
                    <span className="topIconBadge">2</span>
                </div>
                <div className="topbarIconContainer">
                    <Settings/>
                </div>
                <img 
                    src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" 
                    alt="" 
                    className="topAvatar" 
                />
            </div>
        </div>
    </div>
  )
}
