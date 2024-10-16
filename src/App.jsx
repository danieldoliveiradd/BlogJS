import React from 'react'
import Header from "./components/Header/Header"
import PostCard from './components/PostCard/PostCard'
import "./styles/main.scss"
import ErrorPage from './pages/ErrorPage'



function App() {

  return (
    <div>
    <Header/>
    <PostCard/>
    {/* <ErrorPage/> */}
  </div>
  )
}

export default App
