import React from 'react'
import Sidebar from '../Components/Sidebar'
import Workspace from '../Components/Workspace'
import './Dashboard.css'

const Dashboard = () => {
  return (
    <div>
      <div className='dashboard'>
        <Sidebar/>
        <Workspace/>
      </div>
    </div>
  )
}

export default Dashboard
