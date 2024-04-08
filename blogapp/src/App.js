
import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';

import ViewDetails from './components/ViewDetails';
import BlogForm from './components/BlogForm';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<ViewDetails/>}></Route>
        <Route path='/add' element={<BlogForm/>}></Route>
      </Routes>
      {/* <ViewDetails/> */}
     
    </div>
  );
}

export default App;
