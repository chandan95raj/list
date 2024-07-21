
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import List from '../pages/List';
import ListDetails from '../pages/ListDetails';
import Layout from '../components/Layout';
function App() {
  return (
    <>
      <Router>
        <Layout>
        <Routes>
          <Route path="/" element={<List />} />
          <Route path="/list/details" element={<ListDetails />} />
        </Routes>
        </Layout>
      </Router>

    </>
  )
}

export default App
