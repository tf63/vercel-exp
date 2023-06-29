import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import Home from './components/Home'
import './App.css'

const App = () => {
    return (
        <Router>
            {/* <Navbar /> */}
            <Routes>
                {/* Nav */}
                <Route path="/" element={<Home />} />
            </Routes>
        </Router>
    )
}

export default App
