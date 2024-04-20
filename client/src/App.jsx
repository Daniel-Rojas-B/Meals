import './App.css'
import Home from './views/Home'
import Details from './views/Details'
import AddStore from './views/AddStore'
import UpdateStore from './views/UpdateStore'
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stores/:id" element={<Details />} />
          <Route path="/stores/new" element={<AddStore />} />
          <Route path="/stores/edit/:id" element={<UpdateStore />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
