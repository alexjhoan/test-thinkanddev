import React, { createContext, useState } from 'react'

const SearchContext = createContext()

const SearchProvider = ({children}) => {
  const [searching, setSearching] = useState(false)
  const [notResult, setNotResult] = useState(false)

  const globalState = { searching, setSearching, notResult, setNotResult }

  return (
    <SearchContext.Provider value={globalState}>
      {children}
    </SearchContext.Provider>
  )
}

export {SearchProvider}
export default SearchContext