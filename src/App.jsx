
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import List from '../pages/List';
import ListDetails from '../pages/ListDetails';
import Layout from '../components/Layout';
import Dashboard from '../pages/Dashboard';
import { Login } from '../pages/Login';
import ProtectedRoute from '../components/Protected/ProtectedRoute';
import Logout from '../pages/Logout';
import NotFound from '../pages/NotFound';
function App() {
  return (
    <>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<List />} />
            <Route path="/list" element={<List />} />
            <Route path="/list/details" element={<ListDetails />} />
            <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
            <Route path="/login" element={<Login />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </Router>
    </>
  )
}

export default App
