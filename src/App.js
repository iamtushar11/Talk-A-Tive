import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';

function App() {

  const { currentUser } = useContext(AuthContext)
  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {

      return <Navigate to="/login" />
    }
    return children
  }
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<ProtectedRoute>
          <Home />
        </ProtectedRoute>}
        />

        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
