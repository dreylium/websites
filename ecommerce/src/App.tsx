import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '@ui/App.css';

import Layout from './routes/Layout.tsx';
import Home from './routes/Home.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
    <Router>
      <Routes>
        <Route Component={Layout}>
          <Route path="/" Component={Home} />
        </Route>
      </Routes>
    </Router>
    ,
  // </React.StrictMode>,
);
