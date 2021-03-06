import React, { createContext, useEffect, useState } from 'react'

const CurrencyContext = createContext()

const url = process.env.REACT_APP_API

const CurrencyProvider = ({children}) => {
  const [data, setData] = useState()
  const [allData, setAllData] = useState()

  useEffect(() => {
    const getApi = async () => {
      try {
        const res = await fetch(`${url}/entries`)
        const resultado = await res.json()
        setData(resultado)
        setAllData(resultado)   
      } catch (error) {
        console.log(error)
      }
    }
    getApi()
  }, [])
 
  const globalState = { data, setData, allData }

  return (
    <CurrencyContext.Provider value={globalState}>
      {children}
    </CurrencyContext.Provider>
  )
}

export { CurrencyProvider }
export default CurrencyContext