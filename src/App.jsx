import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

import IndexPage from './pages/IndexPage'
import AboutPage from './pages/AboutPage'


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={IndexPage} />
          <Route path='/about' element={AboutPage} />

        </Routes>

      </BrowserRouter>
    </div>
  )
}

export default App
