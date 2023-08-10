
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import { Navbar } from './components/Navbar';
import { Home } from './components/Home/Home';
import { Student } from './components/StudentDetails/Student';
import { FetchAll } from './components/Fetch/FetchAll';
function App() {

  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/studentdetail' element={<Student/>}></Route>

        <Route path='/fetchall' element={<FetchAll/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
