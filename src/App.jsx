import {Route, BrowserRouter as Router, Routes} from 
'react-router-dom';

import {Home, About, Projects, Contact} from './pages';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div>
       <main className="bg-slate-300/20 h-full">
         <Router>
           <Navbar />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/about" element={<About />}></Route>
                <Route path="/projects" element={<Projects />}></Route>
                <Route path="/contact" element={<Contact />}></Route>
            </Routes>
         </Router>
       </main>
    </div>
  )
}

export default App