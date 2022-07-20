import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home'
import Services from './components/pages/Services'
import Experience from './components/pages/Experience'
import './App.css';
import Contact from "./components/pages/Contact";

function App() {
    return (
        <div className="App">
            <Router>
                <Navbar />
                <Routes>
                    <Route path='/' exact element={<Home />} />
                    <Route path='/my-app' exact element={<Home />} />
                    <Route path='/services' element={<Services />} />
                    <Route path='/experience' element={<Experience />} />
                    <Route path='/contact' element={<Contact />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
