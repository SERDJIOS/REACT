import Article from '../Pages/Article/Article'
import Home from '../Pages/Home/Home'
import List from '../Pages/List/List'
import './App.css'
import {BrowserRouter,Route,Routes}from 'react-router-dom'
function App() {


  return (
    <>
     <BrowserRouter>
    
     <Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="/List" element={<List/>}/>
     <Route path="/List/Article:id" element={<Article/>}/>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App

