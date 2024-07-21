
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import List from '../pages/List';
import ListDetails from '../pages/ListDetails';
import Layout from '../components/Layout';
import Dashboard from '../pages/Dashboard';
import { Login } from '../pages/Login';
import ProtectedRoute from '../components/Protected/ProtectedRoute';
import Logout from '../pages/Logout';
function App() {
  return (
    <>
      <Router>
        <Layout>
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="/list/details" element={<ListDetails />} />
          <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
        </Layout>
      </Router>
    </>
  )
}

export default App
