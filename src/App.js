import { HashRouter, Routes, Route } from 'react-router-dom';
import HomepageContent from './components/HomepageContent';
import ProjectDetail from './components/ProjectDetail';

function App() {

  return (
    <HashRouter basename="/" >
      <div className="App">
        <Routes>
          <Route path="/:projectId" element={<ProjectDetail />} />
          <Route path="/" element={<HomepageContent />} />
        </Routes>
      </div> 
    </HashRouter>
  );
}

export default App;
