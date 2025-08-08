import { BrowserRouter as Router, Routes, Route } from "react-router";
import Home from "./Home";
import Player from "./Player";

function App() {
  return (
    <div className='min-h-screen bg-gray-50'>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/watch/:id' element={<Player />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
