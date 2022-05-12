import React from 'react'

const Spinner = () => {
  return (
    <div className="d-flex align-items-center flex-column mt-5">
      <h3 className='fw-bolder'>Loading...</h3>
      <div className="spinner-border text-primary mt-5" role="status" aria-hidden="true" style={{width: "50px", height: "50px"}}></div>
    </div>
  )
}

export default Spinner