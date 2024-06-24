import React, { useState } from 'react'
import './Sidebar.css';

const Sidebar = () => {

  const [workspace, setWorkspace] = useState('');
  const [workspaceList, setWorkspaceList] = useState([]);

  const handleChange=(e)=>{
    setWorkspace(e.target.value);
    console.log(workspace);   
  }

  const handleClick=()=>{
    setWorkspaceList([...workspaceList, workspace]);
    console.log(workspaceList);
    setWorkspace('');
  }

  return (
    <div>
      <div className='sidebar'>
          <div className='sidebar-header'>
            <h1> WorkJam</h1>
          </div>
          <div className='sidebar-body'>
            <div className='sidebar-todo'>
              <input type='text' placeholder='new workspace' onChange={handleChange} value={workspace}/>
              <button onClick={handleClick}>+</button>
            </div>
            <div className='workspace-list'>
              <ul>
                {
                  workspaceList.map((item, index)=>(
                    <li key={index}>{item}</li>
                  ))
                }
              </ul>
            </div>
          </div>
          <div className='sidebar-footer'>
            <button>Logout</button>
            <button>Homepage</button>
          </div>
      </div>
    </div>
  )
}

export default Sidebar
