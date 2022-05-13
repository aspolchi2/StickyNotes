import React from 'react'
import {MdDeleteForever} from 'react-icons/md'
const Note = ({id, text, date, handleDelete}) => {
  return (
    <div className='note'>
    <p>{text}</p>
    <div className='note-footer'> 
    <p>{date}</p>
    <MdDeleteForever onClick={}/>
    </div>
    </div>
  )
}

export default Note