import './App.css'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Home from './pages/Home'
import PageNotFound from './pages/PageNotFound'
import Auth from './pages/Auth'
import Project from './pages/Project'
import Dashboard from './pages/Dashboard'
import Header from './components/Header'

function App() {

  return (
    <>
    <Header/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='*' element={<PageNotFound/>}/>
      <Route path='/login' element={<Auth/>}/>
      <Route path='/project' element={<Project/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      {/* <Route path='/register' element={<Auth register/>}/> */}
     </Routes>
     <Footer/>
    </>
  )
}

export default App
