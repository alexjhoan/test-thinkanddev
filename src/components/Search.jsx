import React, { useContext } from 'react'
import CurrencyContext from '../context/CurrencyContext'
import SearchContext from '../context/SearchContext'

const Search = () => {
  const {setData, allData} = useContext(CurrencyContext)
  const {setSearching, setNotResult} = useContext(SearchContext)

  // funcion que busca solo con el API name

  // const search = (value) => {
  //   let result = allData.filter(find => {
  //     return find.API.toLowerCase().includes(value)
  //   })
  //   setData(result)
  //   setTimeout(() => {
  //     setSearching(false)
  //   }, 600);
  // }

  // funcion que busca con cualquier parametro interno

  const search = (value) => {
    let result = allData.filter(find => {
      return Object.values(find).join(" ").toLowerCase().includes(value)
    })
    if (result.length > 0) {
      setData(result)
      setNotResult(false)
    } else {
      setNotResult(true)
      setData([])
    }
    setTimeout(() => {
      setSearching(false)
    }, 650);
  }


  const onChangeInput = (e) => {
    let inputValue = e.target.value.toLowerCase()
    if (inputValue.length > 0) {
      setSearching(true)
      search(inputValue)  
    } else {
      setSearching(false)
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