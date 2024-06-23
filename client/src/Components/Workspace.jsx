import React from 'react'
import WorkspaceHeader from './WorkspaceHeader'
import WorkspaceBody from './WorkspaceBody'
import './Workspace.css'

const Workspace = () => {
  return (
    <div>
      <div className='workspace'>
        <WorkspaceHeader/>
        <WorkspaceBody/>
      </div>
    </div>
  )
}

export default Workspace
