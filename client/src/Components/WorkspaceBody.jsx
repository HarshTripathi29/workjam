import React, { useCallback, useState } from 'react'
import Board from './Board'
import './WorkspaceBody.css'

const WorkspaceBody = () => {

  const[board, setBoard] = useState('');
  const[boardList, setBoardList] = useState([]);

  const handleChange=(e)=>{
    setBoard(e.target.value);
    console.log(board);
  }

  const handleClick=()=>{
    setBoardList([...boardList, board]);
    setBoard('');
    console.log(boardList);
  }

  return (
    <div>
      <div className='workspace-body'>
      <div className=''>
      <input type='text' placeholder='add a board' onChange={handleChange} value={board}/>
      <button onClick={handleClick}>Add board</button>
      </div>
     <div className='boards-list'>
      <ul>
      {
        boardList.map((item, index)=>(
          <Board name={board}/>
        ))
      }
      </ul>
      </div>
      </div>
    </div>
  )
}
export default WorkspaceBody
