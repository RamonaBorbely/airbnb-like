import React from 'react'
import '../assets/css/style.css'

const Icon = ({ icon, desc}) => {
  return (
 
    <div className='icons-container'>
      <p className='icon'>{icon}</p>
      <p className='desc'>{desc}</p>
    </div>
  )
}

export default Icon
