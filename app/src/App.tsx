import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import './App.css'
import Home from './components/Home'
import About from './components/About'

const App = () => {
    return (
        <Router>
            <Routes>
                {/* Nav */}
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </Router>
    )
}

export default App
