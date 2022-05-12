import React from 'react'
import List from './components/List';
import Search from './components/Search';
import { CurrencyProvider } from './context/CurrencyContext';
import Layout from './layout/Layout';

// const apiEndpoint = "https://api.publicapis.org/entries?category=cryptocurrency";

const App = () => {
  return (
    <CurrencyProvider>
      <Layout>
        <Search />
        <List />
      </Layout>
    </CurrencyProvider>
  )
}

export default App


// The api https://api.publicapis.org/entries?category=cryptocurrency
// returns a list of public cryptocurrency apis. Render in screen a list
// of those apis.
// 	* Each list element must contain api name, description and link
// 	* Items must be filtered by name with the input
// 	* If the input is empty the list must show all items
// 	* You have to implement a debounce function to delay input filtering
//  * You can not use a button to trigger the filtering
//  * Code has to be as efficient as possible

