import React, { useContext } from 'react'
import CurrencyContext from '../context/CurrencyContext'
import Item from './Item'
import NotFind from './NotFind'
import Spinner from './Spinner'

function List() {
  const {data, search, notFind} = useContext(CurrencyContext)
  return (
    <div className="row mt-4">
      {
        !search ? (
          !notFind ? (
            data?.map((e, i) => (
              <div key={i} className="col-12 col-lg-4 py-3">
                <Item item={e} />
              </div>
            ))
          ) :
          <NotFind />
        ) :
        <Spinner/>
      }
    </div>
  )
}

export default List