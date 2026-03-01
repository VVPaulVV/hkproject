import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Concept from './pages/Concept';
import Hebergement from './pages/Hebergement';
import Restauration from './pages/Restauration';
import Detente from './pages/Detente';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="concept" element={<Concept />} />
          <Route path="hebergement" element={<Hebergement />} />
          <Route path="restauration" element={<Restauration />} />
          <Route path="detente" element={<Detente />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
