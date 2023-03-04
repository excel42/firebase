import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext';
import Nav from './components/Nav';
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'

function App() {

    // 통신이 완료되었다면 true를 반환받습니다.
    const { isAuthReady, user } = useAuthContext();

    return (
      <div className="App">
        {isAuthReady ? (
          <BrowserRouter>
            <Nav />
            <Routes>
              <Route path="/" element={user ? <Home /> : <Navigate replace={true} to="/login" />}></Route>
              <Route path="/login" element={!user ? <Login /> : <Navigate to="/" replace={true} />}></Route>
              <Route path="/signup" element={!user ? <Signup /> : <Navigate to="/" replace={true} />}></Route>
            </Routes>
          </BrowserRouter>
        ) : "loading..."}
      </div>
    );
  }

export default App