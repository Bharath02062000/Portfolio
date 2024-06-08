import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Findme from './Findme/Findme';
import Home from './common/Home/Home';

function App() {
 
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/findme" element={<Findme />} />
        
      </Routes>
      </Router>
  );
}

export default App;
