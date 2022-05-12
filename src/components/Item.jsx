import React from 'react'

const Item = ({item}) => {
  return (
    <div className='w-100 bg-white p-3 shadow rounded-3 text-break'>
      <p className="h4 text-break">{item.API}</p>
      <p className='text-break'>{item.Description}</p>
      <a href={item.Link} target="_blank" className='text-break'>{item.Link}</a>      
    </div>
  )
}

export default Item