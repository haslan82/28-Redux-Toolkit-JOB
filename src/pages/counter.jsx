import React from 'react'

const counter = () => {
  return (
    <div className='d-flex vh-100 justify-content-center align-items-center w-full'>
     <div className='d-flex gap-4 align-items-center'>
     <button className='btn btn-danger'>Azalt</button>
      <span className='fs-1'>0</span>
      <button className='btn btn-success'>Arttır</button>
      <button className='btn btn-secondary'>Sıfırla</button>
     </div>
    </div>
  )
}

export default counter
