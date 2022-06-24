// import Header from './components/Header.jsx'

import Card from "./components/Card"
import Footer from "./components/Footer"
import Header from "./components/Header"
import data from "./data"

const App = () => {
  return (
    <>
      <Header/>
      <Card data={data}/>
      <Footer/>
    </>
  )
}

export default App