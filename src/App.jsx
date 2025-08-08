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
      <footer className='py-2'>

        <hr className="opacity-20" />
        <div className='container text-sm text-gray-500 mx-auto text-center'>
          <a href="https://github.com/DaneshVerma/online-Video-Player-ui-task-Kodr2.0">&copy; Created by [<i>Danesh</i>].</a>
        </div>
      </footer>
    </div>
    
  );
}

export default App;
