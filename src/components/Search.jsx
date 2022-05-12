import React, { useContext, useState } from 'react'
import CurrencyContext from '../context/CurrencyContext'
import Spinner from './Spinner'

const Search = () => {
  const {data, setData, allData, setSearch, setNotFind} = useContext(CurrencyContext)

  // funcion que busca solo con el API name

  // const search = (value) => {
  //   let result = allData.filter(find => {
  //     return find.API.toLowerCase().includes(value)
  //   })
  //   setData(result)
  //   setTimeout(() => {
  //     setSearch(false)
  //   }, 600);
  // }

  // funcion que busca con cualquier parametro interno

  const search = (value) => {
    let result = allData.filter(find => {
      return Object.values(find).join(" ").toLowerCase().includes(value)
    })
    if (result.length > 0) {
      setData(result)
      setNotFind(false)
    } else {
      setNotFind(true)
      setData([])
    }
    setTimeout(() => {
      setSearch(false)
    }, 600);
  }


  const onChangeInput = (e) => {
    let inputValue = e.target.value.toLowerCase()
    if (inputValue.length > 0) {
      setSearch(true)
      search(inputValue)  
    } else {
      setSearch(false)
      setData(allData)
    }    
  }

  return (
    <div className="row mt-4">
      <div className="col-12 align-items-center d-flex flex-column">
        <h2>Public Apis:</h2>
        <input type="text" className="form-control w-50" onChange={e => onChangeInput(e) } placeholder="Search"/>
      </div>
    </div>
  )
}

export default Search