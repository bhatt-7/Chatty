import MainContainer from './components/MainContainer';
import './App.css';
import Login from './components/Login';
import { Route, Routes } from 'react-router-dom';
import Welcome from './components/Welcome';
import ChatArea from './components/ChatArea';
import Users from './components/Users';
import Groups from './components/Groups';
import CreateGroups from './components/CreateGroups';
import { useDispatch, useSelector } from 'react-redux';
import Conversations from './components/Conversations';
import { ToastContainer } from 'react-toastify';

function App() {
  const dispatch = useDispatch();
  const lightTheme = useSelector((state)=>state.themeKey)
  return (
    <div className="App">
      <ToastContainer/>
      {/* <MainContainer/> */}
      {/* <Login/> */}
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='app' element={<MainContainer/>}>
          <Route path='welcome' element={<Welcome/>}></Route>
          <Route path='chat' element={<ChatArea/>}></Route>
          <Route path='users' element={<Users/>}></Route>
          <Route path='groups' element={<Groups/>}></Route>
          <Route path='create-groups' element={<CreateGroups/>}></Route>
          <Route path='conversations' element={<Conversations />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
